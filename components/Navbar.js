import Link from 'next/link';

export default function Navbar() {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <Link href="#">
        <img src="/logo.svg" className="logo" />
      </Link>

      {/* user is signed-in and has username */}
      {username && (
        <>
          <Link href="/admin">
            <button>Write Posts</button>
          </Link>
          <Link href={`/${username}`}>
            <img src={user ?.photoURL} />
          </Link>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!username && (
        <Link href="/enter">
          <button>Log in</button>
        </Link>
      )}
    </nav >
  );
}