import Link from 'next/link';
import {useContext, useState} from 'react';
import {UserContext} from '../lib/context';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import Media from 'react-media';

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  const signOut =  () => {
    auth.signOut();
    router.reload();
  }

  const [menuOpen, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menuOpen)
  }
  
  return (
    <nav className="navbar">
      <Media queries={{
          small: "(max-width: 480px)",
          large: "(min-width: 480px)"
        }}>
        {matches => (
          <>
            {matches.small && 
              <Link href="/">
                <img src="/images/logo.svg" className={!menuOpen ? "logo" : "logoHidden"}/>
              </Link>
            }
            {matches.large &&
              <Link href="/">
                <img src="/images/logo.svg" className="logo" alt="Logo"/>
              </Link>
            }
          </>
        )}
      </Media>

      <Media queries={{
          small: "(max-width: 855px)",
          large: "(min-width: 855px)"
        }}>
          {matches => (
            <>
              {matches.small && 
                <div className={!username ? "menu" : "menuUsername"}>
                  <div className="menuButtons">
                    <Link href="/posts"> 
                      <button className={menuOpen ? null : "hidden"}>Read Posts</button>
                    </Link>
                    
                    {/* user is signed-in and has username */}
                    {username && (
                      <>
                        <Link href="/admin">
                          <button className={menuOpen ? null : "hidden"}>Write Posts</button>
                        </Link>
                        <button onClick={signOut} className={menuOpen ? null : "hidden"}>Sign Out</button>
                      </>
                    )}
              
                    {/* user is not signed OR has not created username */}
                    {!username && (
                      <Link href="/signIn"> 
                        <button className={menuOpen ? null : "hidden"}>Log in</button>
                      </Link>
                    )}
                  </div>
                  { menuOpen &&
                    <img src="/images/hamburgerOpened.svg" onClick={toggleMenu} alt="Close Menu"/>
                  } 
                  { !menuOpen &&
                    <img src="/images/hamburgerClosed.svg" onClick={toggleMenu} alt="Open Menu"/>
                  } 
                </div>
              }
              {matches.large && 
                <div className={!username ? "buttons" : "buttonsUsername"}>
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
                    </>
                  )}
            
                  {/* user is not signed OR has not created username */}
                  {!username && (
                    <Link href="/signIn"> 
                      <button>Log in</button>
                    </Link>
                  )}
                </div>
              }
          </>
        )}
      </Media>
      
      {username && (
        <Link href={`/${username}`}>
          <img src={user ?.photoURL} className="pfp" alt="Your profile picture"/>
        </Link>
      )}
    </nav >
  );
}