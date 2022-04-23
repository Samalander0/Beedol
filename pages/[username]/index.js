import { getUserWithUsername, postToJSON } from '../../lib/firebase';
import UserProfile from '../../components/UserProfile';
import PostFeed from '../../components/PostFeed';

import Metatags from "../../components/Metatags";

export async function getServerSideProps({ query }) {
  const { username } = query;

  const userDoc = await getUserWithUsername(username);

  // If the user doesn't exist, tell Next to render the 404 page
  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts }, // will be passed to the page component as props
  };
}

export default function userProfilePage({user, posts}) {
  return (<>
    <Metatags title={user} description="Beedol user page"/>
    <main className="userPage">
      <UserProfile user={user}/>
      <div className="postFeed">
        <PostFeed posts={posts}/>
      </div>
    </main>
  </>);
}