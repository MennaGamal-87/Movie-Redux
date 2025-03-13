import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    TopRatedMovies:[],
    error:null,
}
export const getTopRatedMovies=createAsyncThunk('getTopRatedMovies',async()=>{
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
        }
      };

      const response = await axios.request(options);
      return response.data;
})

   const TopMoviesSlice = createSlice({
    name: 'top movies slice',
    initialState,
    extraReducers:(builder)=>{
       
        builder.addCase(getTopRatedMovies.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getTopRatedMovies.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.TopRatedMovies=action.payload;
        })
        builder.addCase(getTopRatedMovies.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const TopMovies=TopMoviesSlice.reducer;
   



