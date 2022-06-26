import React, { useEffect, useState } from 'react'
import './App.css';

import { addPost, fetchPosts } from './store/Posts/postsSlice';
import type { Post } from './store/Posts/postsSlice';

// hooks to use data easily without explicitly writing the selector
import { useAppSelector, useAppDispatch } from './store/hooks'


// we are importing indevisual selector just to demonstrate the use
import { selectPosts } from './store/Posts/postsSlice'
import { store } from './store';

function App() {
  const { posts } = useAppSelector(state => state.posts)
  const selectedIndevisuallyPost = selectPosts(store.getState())
  const dispatch = useAppDispatch()


  const addFromTypicode = async () => {
    await dispatch(fetchPosts())
    console.log("Posts Updated Asynchronously")
  }

  // both of them will be empty on application beginning
  console.log(selectedIndevisuallyPost)
  console.log(posts)
  return (
    <div>
      <h1>Redux Ready Template with axios in typescript</h1>
      <button
        onClick={addFromTypicode}
      >Fetch Posts</button>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
