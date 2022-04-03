import Link from 'next/link';
import {useContext} from 'react';
import {UserContext} from '../lib/context';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  const signOut =  () => {
    auth.signOut();
    router.reload();
  }
  
  return (
    <nav className="navbar">
      <Link href="https://beedol.samalander.repl.co/">
        <img src="/logo.svg" className="logo" />
      </Link>

      {/* user is signed-in and has username */}
      {username && (
        <>
          <div className="buttons">
            <button onClick={signOut}>Sign Out</button>
            <Link href="/admin">
              <button>Write Posts</button>
            </Link>
            <Link href={`/${username}`}>
              <img src={user ?.photoURL} />
            </Link>
          </div>
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