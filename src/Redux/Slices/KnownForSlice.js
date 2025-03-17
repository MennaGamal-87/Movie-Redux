import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading:false,
    knownFor:[],
    error:null,
}

export const getActorKnownFor=createAsyncThunk('getActorKnownFor',async(actorId)=>{
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/person/${actorId}/movie_credits`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQzOGI0YTE0NWI5MTgyZjVlNzQ0YjBhOGEyYzJjMiIsIm5iZiI6MTcyMzMwMDAxMy4zODEsInN1YiI6IjY2Yjc3OGFkZTg2ZjA3ZGI2ZmE4YzgwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZO9xjjo4ecD44qAygN00FvB1G9oIcBuslIYftcBmOp8'
      }
    };
    
const response = await axios.request(options);
      return response.data;
})
 const KnownForSlice = createSlice({
    name: 'actor slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getActorKnownFor.pending,(state,action)=>{
            console.log('pend')
            state.loading=true;
        })
        builder.addCase(getActorKnownFor.fulfilled,(state,action)=>{
            console.log('ful')
            state.loading=false;
           state.knownFor=action.payload;
        })
        builder.addCase(getActorKnownFor.rejected,(state,action)=>{
            console.log('rej')
            state.loading=false;
        })
    }



    })
    export const actorKnownFor=KnownForSlice.reducer;



