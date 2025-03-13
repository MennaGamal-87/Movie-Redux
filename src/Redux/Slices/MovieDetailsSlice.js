import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    MovieDetail: [],
    error:null,
}

export const getMovieDetails=createAsyncThunk('getMovieDetails',async(movieId)=>{

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };
      
      
      const response = await axios.request(options);
      return response.data;
      
});
   const MovieDetailsSlice = createSlice({
    name: 'Movie Details Slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getMovieDetails.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getMovieDetails.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.MovieDetail=action.payload;
        })
        builder.addCase(getMovieDetails.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
      
    }



    })
   
    export const MovieDetails=MovieDetailsSlice.reducer;
