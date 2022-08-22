import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  seller: null,
};

export const getSellerStatus = createAsyncThunk(
  "sellers/fetchById",
  async (sellerId, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/seller/${sellerId}`
      );
      const data = response.json();
      return data;
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
    },
  },
});

export default sellerSlice.reducer;
