import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addQuizTopic } from '../topics/TopicsSlice';


const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes: {
                    
    }},
    reducers: {
      addQuiz: (state, action) => {
        state.quizzes = {
                ...state.quizzes,
                [action.payload.id]: { 
                    id: action.payload.id,
                    name: action.payload.name,
                    topicId: action.payload.topicId,
                    cardIds: action.payload.cardIds,
                }
                }
      }
    },
    extraReducers: {
    }
  }); 

export const createQuizThunk = (payload) => {
    return (dispatch) =>{
        dispatch(addQuizTopic({id:payload.id, topicId:payload.topicId}));
        dispatch(addQuiz({id:payload.id, name:payload.name, topicId:payload.topicId, cardIds:payload.cardIds}));
    }
}

export const quizSelector = state => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions
export default quizSlice.reducer