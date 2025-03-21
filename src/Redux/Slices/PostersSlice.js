import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    Posters: [],
    error:null,
}
export const getPosters=createAsyncThunk('getPosters',async(Id)=>{
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${Id}/images`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };
    
      const response = await axios.request(options);
      return response.data;
});
   const PostersSlice = createSlice({
    name: 'posters',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getPosters.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getPosters.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.Posters=action.payload;
        })
        builder.addCase(getPosters.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const posters=PostersSlice.reducer;


