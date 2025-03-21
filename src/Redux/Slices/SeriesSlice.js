// src/features/movies/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKey } from './EnglishMoviesSlices';


// Async thunk to fetch movies
export const fetchSeries = createAsyncThunk(
  'movies/fetchSeries',
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`
    );
    return {
      series: response.data.results,
      totalPages: response.data.total_pages,
      currentPage: page,
    };
  }
);

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    series: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.series = action.payload.series;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = seriesSlice.actions;
export const seri = seriesSlice.reducer;