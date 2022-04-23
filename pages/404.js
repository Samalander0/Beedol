import Link from 'next/link';
import Metatags from "../components/Metatags";

export default function Custom404() {
  return (<>
    <Metatags title="404" description="Hmm... Looks like this page doesn't exist"/>
    <main className="page404">
      <h1>404 - That page does not seem to exist 😭</h1>
      <Link href="/">
        <button className="btn-blue">🏠 Go Home</button>
      </Link>
    </main>
  </>);
}