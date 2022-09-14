import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    topics: {
        1: {
            id: 1,
            name: 'Example',
            icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg',
            quizIds: []
        }
    }
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
      addTopic: (state, action) => {
        
        const quizIds = [];
        state.topics = {
                ...state.topics,
                [action.payload.id]: { 
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds: quizIds}
                }
      }
    },
    extraReducers: {
    }
  }); 

export const topicsSelector = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions
export default topicsSlice.reducer