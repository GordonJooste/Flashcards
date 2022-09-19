import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/TopicsSlice';
import quizReducer from '../features/quizzes/QuizSlice';
import cardReducer from '../features/cards/CardsSlice';


export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardReducer },
});
