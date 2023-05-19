import axiosInstance from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const uriLikes = "/users/updateLikes/";

const initialState = {
  _id: "",
  name: "",
  email: "",
  likes: [],
};

export const updateLikes = createAsyncThunk(
  "user/updateLikes",
  async (_id, { getState }) => {
    try {
      const state = getState();
      // @ts-ignore
      const res = await axiosInstance.post(`${uriLikes}${state.user._id}`, {
        // @ts-ignore
        likes: state.user.likes,
      });
      if (!res.data.success) {
        return console.log(res.data.msg);
      }
    } catch (error) {
      return console.log(error);
    }
  }
);
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveUserInfo: (state, { payload }) => {
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.likes = payload.likes;
    },
    deleteUserInfo: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.likes = [];
    },
    //likes
    pushLike: (state, { payload }) => {
      //@ts-ignore
      state.likes.push(payload);
    },
    deleteLike: (state, { payload }) => {
      //@ts-ignore
      const newLikes = state.likes.filter((item) => item._id !== payload);
      state.likes = newLikes;
    },
  },
});

export const { saveUserInfo, deleteUserInfo, pushLike, deleteLike } =
  userSlice.actions;

export default userSlice.reducer;
