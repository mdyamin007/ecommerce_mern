import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  seller: null,
  isError: false,
};

export const getSellerStatus = createAsyncThunk(
  "sellers/fetchById",
  async (sellerId, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/seller/${sellerId}`
      );
      if (response.status === 200) {
        const data = response.json();
        return data;
      } else return thunkAPI.rejectWithValue("Seller not found");
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Seller not found");
    }
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  extraReducers: {
    [getSellerStatus.fulfilled]: (state, action) => {
      state.seller = action.payload;
      state.isError = false;
    },
    [getSellerStatus.rejected]: (state) => {
      state.isError = true;
      state.seller = null;
    },
  },
});

export default sellerSlice.reducer;
