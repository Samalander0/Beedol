import styles from '../styles/Home.module.scss';

export default function Home(props) {
  return (<>
    <header id={styles.header}>
      <div id={styles.title}>
        <h1>Read.</h1>
        <h1>Write.</h1>
        <h1 className="gradient">Learn.</h1>
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