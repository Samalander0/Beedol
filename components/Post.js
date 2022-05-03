import Link from 'next/link';

export default function Post({
  admin = false,
  likes = true,
  published = true,
  username = "username",
  title = "Title",
  slug = "/post",
  wordCount = 200,
  minutesToRead = 3,
  likeCount = 22
}) {
  
   return (<>
    <Link href={`/${username}/${slug}`} passHref>
      <div className="postCard">
        <a href={`/${username}/${slug}`}>
          <Link href={`/${username}`}>
            <a>
              <strong>By @{username}</strong>
            </a>
          </Link>
    
          <h2>{title}</h2>
    
          <footer>
            <span>
              {wordCount} words | {minutesToRead} min read
            </span>
    
            {/* Show like count if like is allowed */}
            {likes && (
            <span className="likeCount">👍{likeCount || 0} Likes</span>
            )}
          </footer>
    
          {/* If admin view, show extra controls for user */}
          {admin && (
            <>
              <Link href={`/admin/${slug}`}>
                <h3>
                  <a><button>Edit</button></a>
                </h3>
              </Link>
    
              {published ? <p className="published">Live</p> : <p className="unpublished">Unpublished</p>}
            </>
          )}
        </a>
      </div>
    </Link>
  </>);
}