import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTweets,
  loadMoreTweets,
  followUser,
  getOneUser,
} from "../utilutes/api";

export const fetchAllUsers = createAsyncThunk("users/fetchAll", async () => {
  try {
    const response = await getTweets();
    console.log(response);
    return response.data;
  } catch (error) {
    return alert(error);
  }
});
export const fetchOneUser = createAsyncThunk("users/fetchOne", async (id) => {
  try {
    const response = await getOneUser(id);
    console.log(response);
    return response.data;
  } catch (error) {
    return alert(error);
  }
});

export const fetchMoreUsers = createAsyncThunk(
  "users/fetchMore",
  async (page) => {
    try {
      const response = await loadMoreTweets(page);
      console.log(response);
      return response.data;
    } catch (error) {
      return alert(error);
    }
  }
);

export const followUserToggle = createAsyncThunk(
  "users/follow",
  async (user) => {
    try {
      await followUser(user);
    } catch (error) {}
  }
);
