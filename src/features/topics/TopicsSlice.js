import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";

const initialState = {
    topics: {
        '1': {
            id: '1',
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
      },
      addQuizTopic: (state, action) => {
        const topicId = action.payload.topicId;
        const quizId = action.payload.id;

        const name = state.topics.[topicId].name;
        const icon = state.topics.[topicId].icon;
        let quizIds = state.topics.[topicId].quizIds;
        quizIds.push(quizId);
        state.topics = {
          ...state.topics,
          [topicId]: { 
              id: topicId,
              name: name,
              icon: icon,
              quizIds: quizIds}
          };
        
      }
    },
    extraReducers: {
    }
  }); 

export const topicsSelector = state => state.topics.topics;

export const { addTopic, addQuizTopic } = topicsSlice.actions
export default topicsSlice.reducer