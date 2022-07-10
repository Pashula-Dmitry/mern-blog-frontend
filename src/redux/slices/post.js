import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as apiPosts from "../../services/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await apiPosts.getAll("posts");
  return posts;
});

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const tags = await apiPosts.getAllTags("tags");
  return tags;
});

const initalState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initalState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },

    [fetchTags.pending]: (state) => {
      state.tags.status = "loading";
    },
    [fetchTags.fulfilled]: (state, action) => {
      state.tags.items = action.payload;
      state.tags.status = "loaded";
    },
    [fetchTags.rejected]: (state) => {
      state.tags.items = [];
      state.tags.status = "error";
    },
  },
});

export default postsSlice.reducer;
export const postActions = postsSlice.actions;
