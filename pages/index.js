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

  const features = useRef();

  const topFeatures = useRef();
  const bottomFeatures = useRef();

  const cta = useRef();

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
      duration: 1,
      scrollTrigger: {
        trigger: about.current,
        start: "top center"
      }
    });

    gsap.to(topFeatures.current, {
      x: -500,
      scrollTrigger: {
        trigger: features.current,
        start: "top center",
        scrub: true
      }
    })
    gsap.to(bottomFeatures.current, {
      x: 500,
      scrollTrigger: {
        trigger: features.current,
        start: "top center",
        scrub: true
      }
    })

    gsap.to(features.current.children, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: features.current,
        start: "top center"
      }
    });

    gsap.to(cta.current.children, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: cta.current,
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
      <section id={styles.about} ref={about}>
        <div id={styles.aboutText}>
          <h2>Hey, Welcome to <span className="gradient">Beedol</span>!</h2>
          <p>Beedol isn&apos;t your average app... here&apos;s what Beedol can offer for you: <abbr title="Well, not maybe not tones yet. Write some posts people!">TONS</abbr> of how to articles written to help YOU succeed, a community of students and educators writing and reading beautiful posts, and guess what? It&apos;s completely free. That&apos;s right. No in app purchases. No ads. Completely free. So what are you waiting for? Hop right in!</p>
          <Link href="/signIn">
            <a><button>Create an Account</button></a>
          </Link>
        </div>
        <Link href="cosmic/how-to-write-a-good-beedol-post"><img src="/images/mockup.png" alt="A Beedol post on a computer"/></Link>
      </section>
      <section id={styles.features} ref={features}>
        <h2>Features to help <span className="gradient">YOU</span> out</h2>
        <p className={styles.text}>Beedol was made by students, for students to help them out. We know what it's like to be a student. The panic before a test, needing to know a bunch of concepts. The one homework question that you can't find the answer to. A problem that you can't figure out. Beedol is here for YOU.</p>
        <div id={styles.featuresList}>
          <div id={styles.topFeatures} ref={topFeatures}>
            <p title="Sign in with Google in one click!">One-Click Sign In</p>
            <p title="Write your posts in Markdown!">Markdown Writing</p>
            <p title="Like posts that you like! Gauge how good a post is by how many likes it has!">Like (👍) Posts</p>
            <p title="See how long a post will take to read!">Post Read Time & Character Count</p>
            <p title="Click on a user's name to go to their profile and read all of their posts!">User Profiles</p>
          </div>
          <div id={styles.bottomFeatures} ref={bottomFeatures}>
            <p title="You can upload images and gifs with our built in uploader!">Add Images & Gifs</p>
            <p title="Beedol can be installed as an app on most devices!">Mobile & Desktop Apps</p>
            <p title="Type site:beedol.app followed by your search into any search engine!">Search With Any Search Engine</p>
            <p title="Hand-reviewed featured posts!">Featured Posts</p>
            <p title="Make it personal! Create your own custom username!">Custom Usernames</p>
          </div>
        </div>
      </section>
      <section id={styles.cta} ref={cta}>
        <h2>What are you waiting for?</h2>
        <p>What's the holdup? Hop right into the Beedol community by creating an account below. If you're not convinced, you can check out some posts by clicking the Start Learning button!</p>
        <div>
          <Link href="/signIn"><button>Create an Account</button></Link>
          <Link href="/posts"><button>Start Learning</button></Link>
        </div>
      </section>
    </main>
  </>)
}