import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

import { AppDispatch } from "../index";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Posts {
  posts: Post[];
}

const initialState: Posts = {
  posts: [
    // {
    //   id: 1,
    //   title: "Hello world",
    //   body: "This is the body of post 1",
    // },
    // {
    //   id: 2,
    //   title: "Hello world 2",
    //   body: "This is the body of post 2",
    // },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});


// here we export function to dispatch from components
export const { addPost } = postsSlice.actions;

// exporting indevisual selector to grab data from components
export const selectPosts = (state: RootState) => state.posts.posts;

// here i will describe a thunk to see if we can use it later
export const fetchPosts = () => async (dispatch: AppDispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post: Post) => dispatch(addPost(post)));
};

export default postsSlice.reducer;
