import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading:false,
    Videos:[],
    error:null,
}

export const getVideos=createAsyncThunk('getVideos',async(movieId)=>{

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };
    
   
const response = await axios.request(options);
      return response.data;
})
 const VideosSlice = createSlice({
    name: 'videos slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getVideos.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getVideos.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.Videos=action.payload;
        })
        builder.addCase(getVideos.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const videos=VideosSlice.reducer;
