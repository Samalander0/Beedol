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
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
  ]
  const rightHomePosts = [
    {
      title: "How to write a post",
      slug: "sam/HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
      words: "262",
      minutes: "4",
    },
    {
      title: "How to write a post",
      slug: "HTWAP",
      username: "sam",
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
          return (<Post published={true} title={post.title} username={post.username} slug={post.slug} wordCount={post.words} minutesToRead={post.minutes} likes={false}/>)
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
    </main>
  </>)
}