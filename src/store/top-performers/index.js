import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dummy from '../../api/dummy';


export const fetchTopPerformers = createAsyncThunk('topPerformers/fetchTopPerformers', async (params, { rejectWithValue }) => {
  try {
    const response = await dummy.get('/users');

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