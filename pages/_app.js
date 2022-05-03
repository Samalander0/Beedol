import '../styles/globals.scss'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Toaster} from 'react-hot-toast'; //Import the "React Hot Toast library which lets us create notifications (https://react-hot-toast.com/)"
import {UserContext} from '../lib/context'; //Import in the User Context

import {useUserData} from '../lib/hooks';

// Splitbee (Analitics)
import splitbee from '@splitbee/web';
splitbee.init()

function MyApp({ Component, pageProps }) {
  
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster/>
    </UserContext.Provider>
  );
}

export default MyApp
