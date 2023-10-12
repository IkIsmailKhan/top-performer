import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchTopPerformers = createAsyncThunk('topPerformers/fetchTopPerformers', async (params, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');

    return response.data
  }
  catch (err) {
    return rejectWithValue(err.message)
  }
})



export const topPerformers = createSlice({
  name: 'topPerformers',
  initialState: {
    data: [],
    loading: true,
    error: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTopPerformers.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = ''
    })
    builder.addCase(fetchTopPerformers.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(fetchTopPerformers.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export default topPerformers.reducer