import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    MoviesSearch: [],
    error:null,
}

export const SearchMovies=createAsyncThunk('SearchMovies',async(query)=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {query: `${query}`},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };
      
      const response = await axios.request(options);
      return response.data;
});
   const MoviesSearchSlice = createSlice({
    name: ' MoviesSearch slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(SearchMovies.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(SearchMovies.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.MoviesSearch=action.payload;
        })
        builder.addCase(SearchMovies.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const searchMovies=MoviesSearchSlice.reducer;



