import styles from '../styles/Home.module.scss';
import Metatags from "../components/Metatags";
import Link from 'next/link'

export default function Home(props) {
  return (<>
    <Metatags/>
    <header id={styles.header}>
      <div>
        <div id={styles.title}>
          <h1>Read.</h1>
          <h1>Write.</h1>
          <h1 className="gradient">Learn.</h1>
        </div>
        <p>How to articles by students, for students</p>
        <Link href="/posts"><button>Explore Posts</button></Link>
      </div>
      <aside>
        <div id={styles.leftPosts}>
        </div>
        <div id={styles.rightPosts}>
        </div>
      </aside>
    </header>
  </>)
}