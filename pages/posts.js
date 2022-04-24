import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Loader from '../components/Loader';
import toast from 'react-hot-toast';

import PostFeed from '../components/PostFeed';
import { firestore, fromMillis, postToJSON } from '../lib/firebase';

import { useState } from 'react';

import Metatags from "../components/Metatags";

// Max post to query per page
const LIMIT = 6;
const FLIMIT = 6; // For featured posts

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT);
  const featuredPostsQuery = firestore
    .collectionGroup('posts')
    .where('featured', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(FLIMIT);

  const posts = (await postsQuery.get()).docs.map(postToJSON);
  const featuredPosts = (await featuredPostsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts, featuredPosts }, // will be passed to the page component as props
  };
}

export default function Posts(props) {
  // Recent Posts
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);

  const [postsEnd, setPostsEnd] = useState(false);

  // Featured Posts
  const [featuredPosts, setFeaturedPosts] = useState(props.featuredPosts);
  const [featuredLoading, setFeaturedLoading] = useState(false);

  const [featuredPostsEnd, setFeaturedPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };
  const getMoreFeaturedPosts = async () => {
    setFeaturedLoading(true);
    const last = featuredPosts[featuredPosts.length - 1];

    const fCursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const fQuery = firestore
      .collectionGroup('posts')
      .where('featured', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(fCursor)
      .limit(FLIMIT);

    const newFPosts = (await fQuery.get()).docs.map((doc) => doc.data());

    setFeaturedPosts(featuredPosts.concat(newFPosts));
    setFeaturedLoading(false);

    if (newFPosts.length < FLIMIT) {
      setFeaturedPostsEnd(true);
    }
  };

  return (<>
      <Metatags title="Beedol Posts" description="Check out featured and recent posts by Beedol users!"/>
      <main id="main">
        <section>
          <h1>Featured Posts</h1>
          <p>Read some of our curated featured posts! Want to be featured? Our team hand-revews each post, so if we see one we like, we'll add it here!</p>
          <div className="postFeed">
            <PostFeed posts={featuredPosts} />
          </div>
          
          {!featuredLoading && !featuredPostsEnd && <button onClick={getMoreFeaturedPosts} className="loadMoreButton">Load more</button>}
  
          <Loader show={featuredLoading} />
  
          {featuredPostsEnd && 'You have reached the end!'}
        </section>
        <section>
          <h1>Recent Posts</h1>
          <p>Check out the most recent posts from Beedol users!</p>
          <div className="postFeed">
            <PostFeed posts={posts} />
          </div>
          
          {!loading && !postsEnd && <button onClick={getMorePosts} className="loadMoreButton">Load more</button>}
  
          <Loader show={loading} />
  
          {postsEnd && 'You have reached the end!'}
        </section>
      </main>
  </>);
}
