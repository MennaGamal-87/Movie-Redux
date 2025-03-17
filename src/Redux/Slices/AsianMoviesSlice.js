import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading:false,
    asianMov:[],
    error:null,
}
export const apiKey = '24d38b4a145b9182f5e744b0a8a2c2c2';
export const baseURL = 'https://api.themoviedb.org/3';
export const getAsianMovies=createAsyncThunk('getAsianMovies',async()=>{

    const options = {
      method: 'GET',
      url: `${baseURL}/discover/movie?api_key=${apiKey}&with_original_language=ja|ko|zh`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };

const response = await axios.request(options);
      return response.data;
})
 const AsianMoviesSlice = createSlice({
    name: 'english movies slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAsianMovies.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getAsianMovies.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.asianMov=action.payload;
        })
        builder.addCase(getAsianMovies.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const AsianMovie=AsianMoviesSlice.reducer;

