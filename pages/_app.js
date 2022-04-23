import '../styles/globals.scss'
import Navbar from '../components/Navbar';
import {Toaster} from 'react-hot-toast'; //Import the "React Hot Toast library which lets us create notifications (https://react-hot-toast.com/)"
import {UserContext} from '../lib/context'; //Import in the User Context

import {useUserData} from '../lib/hooks';

function MyApp({ Component, pageProps }) {
  
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster/>
    </UserContext.Provider>
  );
}

export default MyApp
