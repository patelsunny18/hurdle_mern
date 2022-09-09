import { configureStore } from '@reduxjs/toolkit';
import gameSliceReducer from './game-slice';

const store = configureStore({
    reducer: {
        game: gameSliceReducer
    }
});

export default store;