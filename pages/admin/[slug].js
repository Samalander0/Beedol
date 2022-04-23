import styles from '../../styles/Admin.module.scss';
import AuthCheck from '../../components/AuthCheck';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
import ImageUploader from '../../components/ImageUploader';

import { useState } from 'react';
import { useRouter } from 'next/router';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import toast from 'react-hot-toast';

import Metatags from "../../components/Metatags";

export default function AdminPostEdit(props) {
  return (<>
    <Metatags title="Edit Post" description="Write & edit a post"/>
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  </>);
}

function PostManager() {
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = firestore.collection('users').doc(auth.currentUser.uid).collection('posts').doc(slug);
  const [post] = useDocumentData(postRef); //Listen to post in realtime

  return (
    <main id={styles.main}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm postRef={postRef} defaultValues={post} preview={preview} />
          </section>

          <aside>
            <h3>Info</h3>
            <p>Here's where you can write a post! Style your post using <a href="https://commonmark.org/help/">Markdown</a>, and upload images and gifs bellow!</p>
            
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button>Live view</button>
            </Link>
            
            <ImageUploader/>
          </aside>
        </>
      )}
    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, reset, watch, formState, errors } = useForm({ defaultValues, mode: 'onChange' });
  const { isValid, isDirty } = formState;

  // Runs on form submit
  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success('Post updated successfully!')
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div id={styles.preview}>
          <ReactMarkdown>{watch('content')}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <textarea {...register('content')} id={styles.editor}></textarea>

        <div id={styles.save}>
          <label id={styles.published}>Published <input type="checkbox" {...register('published')} id={styles.checkbox}/></label>
  
          <button type="submit" disabled={!isDirty || !isValid}>
            Save Changes
          </button>
        </div>
      </div>
    </form >
  );
}