// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import topPerformers from './top-performers/index'

export const store = configureStore({
    reducer: {
        topPerformers,
    }
})