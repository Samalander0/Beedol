import styles from '../styles/Home.module.scss';
import Metatags from "../components/Metatags";
import Link from 'next/link'
import Post from '../components/Post'

import {React, useEffect, useRef} from 'react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
  // GSAP Stuff
  const header = useRef();
  const rightPosts = useRef();
  const leftPosts = useRef();

  const title = useRef();
  const subtitle = useRef();
  const button = useRef();

  const about = useRef();

  useEffect(() => {
    gsap.to(leftPosts.current.children, {
      y: '-15rem',
      scrollTrigger: {
        trigger: header.current,
        scrub: true,
        start: "top top"
      }
    });
    gsap.to(rightPosts.current.children, {
      y: '15rem',
      scrollTrigger: {
        trigger: header.current,
        scrub: true,
        start: "top top"
      }
    });
    gsap.to(about.current.children, {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: about.current,
        start: "top center"
      }
    });
  });

  // Featured posts
  const leftHomePosts = [
    {
      title: "How to Solve Equations Correctly",
      slug: "how-to-solve-equations-correctly",
      username: "cosmic",
      words: "501",
      minutes: "6",
    },
    {
      title: "How to Download The Beedol App",
      slug: "how-to-download-beedol-as-an-app",
      username: "sam",
      words: "112",
      minutes: "2",
    },
    {
      title: "Placeholder Post 2",
      slug: "placeholder-post2",
      username: "John Doe2",
      words: "262",
      minutes: "4",
    },
    {
      title: "Placeholder Post3",
      slug: "placeholder-post3",
      username: "John Doe3",
      words: "262",
      minutes: "4",
    },
  ]
  const rightHomePosts = [
    {
      title: "Placeholder Post4",
      slug: "placeholder-post4",
      username: "John Doe4",
      words: "262",
      minutes: "4",
    },
    {
      title: "Placeholder Post5",
      slug: "placeholder-post5",
      username: "John Do5e",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to Write a Good Beedol Post",
      slug: "how-to-write-a-good-beedol-post",
      username: "cosmic",
      words: "620",
      minutes: "7",
    },
    {
      title: "Placeholder Post6",
      slug: "placeholder-post6",
      username: "John Doe6",
      words: "262",
      minutes: "4",
    },
  ]
  
  return (<>
    <Metatags/>
    <header id={styles.header} ref={header}>
      <div id={styles.headerText}>
        <div id={styles.title} ref={title}>
          <h1>Read.
          <br/>Write.
          <br/><span className="gradient">Learn.</span></h1>
        </div>
        <p ref={subtitle}>How to articles by students, for students</p>
        <Link href="/posts"><a><button ref={button}>Explore Posts</button></a></Link>
      </div>
      <aside id={styles.posts} className="homepagePosts">
        <div id={styles.leftPosts} ref={leftPosts}>
          {leftHomePosts.map((post) => {
          return (<Post published={true} title={post.title} username={post.username} slug={post.slug} wordCount={post.words} minutesToRead={post.minutes} likes={false}/>)
          })}
        </div>
        <div id={styles.rightPosts} className="rightHomepagePosts" ref={rightPosts}>
          {rightHomePosts.map((post) => {
          return (<Post published={true} title={post.title} username={post.username} slug={post.slug} wordCount={post.words} minutesToRead={post.minutes} likes={false}/>)
          })}
        </div>
      </aside>
    </header>
    <main id={styles.main}>
      <section id={styles.about} ref={about}>
        <div id={styles.aboutText}>
          <h2>Hey, Welcome to <span className="gradient">Beedol</span>!</h2>
          <p>I know what you're thinking: "Yaaay... another lame app... I wonder how many sh*tty ads this one will show me." But this isn't your average app... here's what Beedol can offer for you: <abbr title="Well, not maybe not tones yet. Write some posts people!">TONES</abbr> of how to articles written to help YOU succeed, a community of students and educators writing and reading beautiful posts, and guess what? It's completely free. That's right. No in app purchases. No ads. Completely free. So what are you waiting for? Hop right in!</p>
          <Link href="/signIn">
            <a><button>Create an Account</button></a>
          </Link>
        </div>
        <Link href="cosmic/how-to-write-a-good-beedol-post"><img src="/images/mockup.png"/></Link>
      </section>
    </main>
  </>)
}