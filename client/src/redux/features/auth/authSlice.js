import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../setup/api";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, userData, {
        headers: { "Content-Type": "application/json" },
      });
      const { userId, userType, authToken } = res.data;
      const user = {
        userId,
        userType,
        authToken,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  console.log(thunkAPI);
  thunkAPI.dispatch(reset());
  localStorage.removeItem("user");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload.message;
      state.user = {
        userId: action.payload.userId,
        userType: action.payload.userType,
        authToken: action.payload.authToken,
      };
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
