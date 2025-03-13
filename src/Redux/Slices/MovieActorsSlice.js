import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading:false,
    MovieActor:[],
    error:null,
}

export const getMovieActors=createAsyncThunk('getMovieActors',async(movieId)=>{


    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };

const response = await axios.request(options);
      return response.data;
})
 const MovieActorsSlice = createSlice({
    name: 'Movie Actors',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getMovieActors.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getMovieActors.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.MovieActor=action.payload;
        })
        builder.addCase(getMovieActors.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const MovieActors=MovieActorsSlice.reducer;



