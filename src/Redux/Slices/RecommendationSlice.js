import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    recommendations: [],
    error:null,
}
export const getRecommendations=createAsyncThunk('getRecommendations',async(Id)=>{

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${Id}/recommendations`,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };
    
   
      const response = await axios.request(options);
      return response.data;
});
   const RecommendationSlice = createSlice({
    name: 'all movies slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getRecommendations.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getRecommendations.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.recommendations=action.payload;
        })
        builder.addCase(getRecommendations.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const Recommendation=RecommendationSlice.reducer;



