import { createSlice } from "@reduxjs/toolkit";


// gameStatus: the state of the game
// gridState: an array which stores the letters entered in a row
// gridStyles: an array which stores the styles for each row
// animation: ??
// alertMessage: an object with the message text and its duration
const initialState = {
    gameStatus: "IN_PROGRESS",
    numberOfLetters: 5,
    numberOfRows: 6,
    currentRow: 0,
    gridState: new Array(6).fill(""),
    gridStyles: new Array(6).fill(""),
    animation: "",
    alertMessage: {
        message: "",
        duration: 1000
    }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addLetterToCurrentRow(state, action) {
            // TODO
        },
        backSpaceHandler(state) {
            // TODO
        },
        enterHandler(state) {
            // TODO
        }
    }
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;