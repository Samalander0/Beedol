import Link from 'next/link';
import {useContext} from 'react';
import {UserContext} from '../lib/context';

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  
  return (
    <nav className="navbar">
      <Link href="./#">
        <img src="/logo.svg" className="logo" />
      </Link>

      {/* user is signed-in and has username */}
      {username && (
        <>
          <div className="buttons">
            <button>Sign Out</button>
            <Link href="/admin">
              <button>Write Posts</button>
            </Link>
          </div>
          <Link href={`/${username}`}>
            <img src={user ?.photoURL} />
          </Link>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!username && (
        <div className="buttons">
          <Link href="/signIn">
            <button>Log in</button>
          </Link>
        </div>
      )}
    </nav >
  );
}