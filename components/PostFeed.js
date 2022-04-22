import Link from 'next/link';
import Post from './Post'

export default function PostFeed({ posts, admin }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post ?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (<>
    <Post admin={admin} published={post.published} title={post.title} username={post.username} slug={post.slug} wordCount={wordCount} minutesToRead={minutesToRead} likeCount={post.heartCount}/>
  </>);
}