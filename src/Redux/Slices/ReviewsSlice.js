import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    reviews: [],
    error:null,
}
export const getReviews=createAsyncThunk('getReviews',async(Id)=>{
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${Id}/reviews`,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };

      const response = await axios.request(options);
      return response.data;
});
   const ReviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getReviews.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getReviews.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.reviews=action.payload;
        })
        builder.addCase(getReviews.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const Reviews=ReviewsSlice.reducer;


