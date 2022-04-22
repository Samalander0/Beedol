import Link from 'next/link';

export default function Post({
  admin = false,
  hearts = true,
  published = true,
  username = "username",
  title = "Title",
  slug = "/post",
  wordCount = 200,
  minutesToRead = 3,
  likeCount = 22
}) {
  
   return (<>
    <div className="postCard">
      <Link href={`/${username}`}>
        <a>
          <strong>By @{username}</strong>
        </a>
      </Link>

      <Link href={`/${username}/${slug}`}>
        <h2>
          <a>{title}</a>
        </h2>
      </Link>

      <footer>
        <span>
          {wordCount} words | {minutesToRead} min read
        </span>

        {/* Show heart count if hearts is allowed */}
        {hearts && (
        <span className="likeCount">👍 {likeCount || 0} Likes</span>
        )}
      </footer>

      {/* If admin view, show extra controls for user */}
      {admin && (
        <>
          <Link href={`/admin/${slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
        </>
      )}
    </div>
  </>);
}