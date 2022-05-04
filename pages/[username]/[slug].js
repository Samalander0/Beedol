import styles from '../../styles/Post.module.scss';
import ReactMarkdown from 'react-markdown';
import LikeButton from '../../components/LikeButton';
import AuthCheck from '../../components/AuthCheck';
import Metatags from '../../components/Metatags';
import { UserContext } from '../../lib/context';
import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase';

import Link from 'next/link';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useContext } from 'react';

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  if (userDoc) {
    const postRef = userDoc.ref.collection('posts').doc(slug);
    post = postToJSON(await postRef.get());

    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  // Improve my using Admin SDK to select empty docs
  const snapshot = await firestore.collectionGroup('posts').get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    // must be in this format:
    // paths: [
    //   { params: { username, slug }}
    // ],
    paths,
    fallback: 'blocking',
  };
}

export default function Post(props) {
  const postRef = firestore.doc(props.path);
  const [realtimePost] = useDocumentData(postRef);

  const post = realtimePost || props.post;

  const { user: currentUser } = useContext(UserContext);

  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
  const date = createdAt.toISOString()

  return (<>
    <Metatags title={post.title} description={post.title} />
    <main id={styles.main}>

      <div id={styles.content}>
        <ReactMarkdown>{post?.content}</ReactMarkdown> 
      </div>

      <aside id={styles.sidebar}>
        <h2>{post?.title}</h2>
        <span className="smallText">
          Written by {' '}
          <p style={{display: "inline"}}><Link href={`/${post.username}/`}>
            <a className="infoText">@{post.username}</a>
          </Link></p> {' '}
          on {date.substring(0,10)}
        </span>
        
        <p id={styles.likeCount}>{post.heartCount || 0} 👍</p>

        <AuthCheck
          fallback={
            <Link href="/signIn">
              <button>👍 Sign Up</button>
            </Link>
          }
        >
          <LikeButton postRef={postRef} />
        </AuthCheck>

        {currentUser?.uid === post.uid && (
          <Link href={`/admin/${post.slug}`}>
            <button className="btn-blue">Edit Post</button>
          </Link>
        )}
      </aside>
    </main>
  </>);
}