import { createAsyncThunk } from "@reduxjs/toolkit";
import { followUser, getOneTweet, loadTweets } from "../utilutes/api";

export const fetchOneUser = createAsyncThunk("users/fetchOne", async (id) => {
  try {
    const response = await getOneTweet(id);
    return response.data;
  } catch (error) {
    return alert(error);
  }
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  try {
    const response = await loadTweets(page);
    return response.data;
  } catch (error) {
    return alert(error);
  }
});

export const followUserToggle = createAsyncThunk(
  "users/follow",
  async (user) => {
    try {
      await followUser(user);
    } catch (error) {}
  }
);
