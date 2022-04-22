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
      <Link href="/">
        <img src="/images/logo.svg" className="logo" />
      </Link>

      <div className="buttons">
        <Link href="/posts"> 
          <button>Read Posts</button>
        </Link>
        
        {/* user is signed-in and has username */}
        {username && (
          <>
            <Link href="/admin">
              <button>Write Posts</button>
            </Link>
            <button onClick={signOut}>Sign Out</button>
            {/* links to /username (href={`/${username}`}) */}
            <Link href={`/${username}`}>
              <img src={user ?.photoURL} />
            </Link>
          </>
        )}
  
        {/* user is not signed OR has not created username */}
        {!username && (
          <Link href=""> 
            <button>Log in</button>
          </Link>
        )}
      </div>
    </nav >
  );
}