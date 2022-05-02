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

  useEffect(() => {
    gsap.to(leftPosts.current.children, {
      y: '-15rem',
      scrollTrigger: {
        trigger: header.current,
        scrub: true,
        start: "top top"
      }
    })
    gsap.to(rightPosts.current.children, {
      y: '15rem',
      scrollTrigger: {
        trigger: header.current,
        scrub: true,
        start: "top top"
      }
    })
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
      title: "Placeholder Post",
      slug: "/",
      username: "John Doe",
      words: "262",
      minutes: "4",
    },
    {
      title: "Placeholder Post",
      slug: "/",
      username: "John Doe",
      words: "262",
      minutes: "4",
    },
  ]
  const rightHomePosts = [
    {
      title: "Placeholder Post",
      slug: "/",
      username: "John Doe",
      words: "262",
      minutes: "4",
    },
    {
      title: "Placeholder Post",
      slug: "/",
      username: "John Doe",
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
      title: "Placeholder Post",
      slug: "/",
      username: "John Doe",
      words: "262",
      minutes: "4",
    },
  ]
  
  return (<>
    <Metatags/>
    <header id={styles.header} ref={header}>
      <div id={styles.headerText}>
        <div id={styles.title}>
          <h1>Read.</h1>
          <h1>Write.</h1>
          <h1 className="gradient">Learn.</h1>
        </div>
        <p>How to articles by students, for students</p>
        <Link href="/posts"><button>Explore Posts</button></Link>
      </div>
      <aside id={styles.posts} className="homepagePosts">
        <div id={styles.leftPosts} ref={leftPosts}>
          {leftHomePosts.map((post, key) => {
          return (<Post published={true} title={post.title} username={post.username} slug={post.slug} wordCount={post.words} minutesToRead={post.minutes} likes={false} key={key}/>)
          })}
        </div>
        <div id={styles.rightPosts} className="rightHomepagePosts" ref={rightPosts}>
          {rightHomePosts.map((post, key) => {
          return (<Post published={true} title={post.title} username={post.username} slug={post.slug} wordCount={post.words} minutesToRead={post.minutes} likes={false} key={key}/>)
          })}
        </div>
      </aside>
    </header>
    <main id={styles.main}>
      <section id={styles.about}>
        <div id={styles.aboutText}>
          <h2>What is <span className="gradient">Beedol</span>?</h2>
          <p>Beedol was created by high school student <a href="https://samalander.dev" target="_blank">Sam Cheng</a> to help students with learning about school topics and answering school questions. He found that it was frustrating searching up questions and getting websites with ads, fluff, and bad answers. Beedol solves these problems in multiple ways. It has a clean, minimalistic UI and fast page loading times. It also tells you exactly how long a post will take to read and shows like counts to help judge which posts are quality and helpful.</p>
        </div>
        <img src="/images/mockup.png"/>
      </section>
    </main>
  </>)
}