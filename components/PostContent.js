import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// UI component for main post content
export default function PostContent({ post }) {
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  //Return the post's contnet. Uses React Markdown to allow us to use markdown
  return (
    <div className="post">
      <h1>{post?.title}</h1>
      <span className="smallText">
        Written by{' '}
        <Link href={`/${post.username}/`}>
          <a className="infoText">@{post.username}</a>
        </Link>{' '}
        on {createdAt.toISOString()}
      </span>
      <ReactMarkdown>{post?.content}</ReactMarkdown> 
    </div>
  );
}