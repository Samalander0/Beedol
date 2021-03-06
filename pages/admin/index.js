import styles from '../../styles/Admin.module.scss';
import AuthCheck from '../../components/AuthCheck';
import PostFeed from '../../components/PostFeed';
import { UserContext } from '../../lib/context';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';

import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { useCollection } from 'react-firebase-hooks/firestore';
import kebabCase from 'lodash.kebabcase';
import toast from 'react-hot-toast';

import Metatags from "../../components/Metatags";

import Media from 'react-media';

export default function AdminPostsPage(props) {
  return (<>
    <Metatags title="Beedol Admin" description="Write & edit your posts"/>
    <main className="adminPage">
      <AuthCheck>
        <PostList />
        <CreateNewPost />
      </AuthCheck>
    </main>
  </>);
}

function PostList() {
  const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('posts');
  const query = ref.orderBy('createdAt');
  const [querySnapshot] = useCollection(query);

  const posts = querySnapshot?.docs.map((doc) => doc.data());

  return (
    <>
      <h1>Manage your Posts</h1>
      <div className="postFeed">
        <PostFeed posts={posts} admin />
      </div>
    </>
  );
}

function CreateNewPost() {
  const router = useRouter();
  const { username } = useContext(UserContext);
  const [title, setTitle] = useState('');

  // Ensure slug is URL safe (Kebab case strips out all characters like &/ and %)
  const slug = encodeURI(kebabCase(title));

  // Validate length
  const isValid = title.length > 7 && title.length < 100;

  // Create a new post in firestore
  const createPost = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const ref = firestore.collection('users').doc(uid).collection('posts').doc(slug);

    // Tip: give all fields a default value here
    const data = {
      title,
      slug,
      uid,
      username,
      published: false,
      featured: false,
      content: '# How to...',
      createdAt: serverTimestamp(), //Server timestamp from firestore
      updatedAt: serverTimestamp(),
      heartCount: 0,
    };

    await ref.set(data); //Comit the doccument to firestore

    toast.success('Post created!')

    // Imperative navigation after doc is set
    router.push(`/admin/${slug}`);

  };

  return (
    <form onSubmit={createPost} className="createPost">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="How to..."
        className={!isValid ? "disabled" : null}
      />
      {/*<p>
        <strong>Slug:</strong> {slug}
      </p>*/}
      <button type="submit" disabled={!isValid}>
        Create New Post
      </button>
      <Media query="(min-width: 660px)" render={() =>
        (
          <p id="errorMessage" className={isValid ? "hidden" : null}>?????? Write a title!</p>
        )}
      />
    </form>
  );
}