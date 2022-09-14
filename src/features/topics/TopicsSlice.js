import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    topics: {}
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
      addTopic: (state, action) => {
        
        const quizIds = [];
        state.topics = {
                ...state.topics,
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: quizIds}
      }
    },
    extraReducers: {
    }
  }); 

export const topicsSelector = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions
export default topicsSlice.reducer