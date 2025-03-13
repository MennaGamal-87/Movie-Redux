import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    TopRatedSeries: [],
    error:null,
}

export const getTopRatedSeries=createAsyncThunk('getTopRatedSeries',async()=>{
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/top_rated',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
        }
      };
      
      
      const response = await axios.request(options);
      return response.data;
      
});
   const TopSeriesSlice = createSlice({
    name: 'top rated slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getTopRatedSeries.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getTopRatedSeries.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.TopRatedSeries=action.payload;
        })
        builder.addCase(getTopRatedSeries.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
      
    }



    })
   
    export const TopSeries=TopSeriesSlice.reducer;



