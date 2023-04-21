import {createSlice} from "@reduxjs/toolkit";
import {findAllPinnedRecipeThunk, findOtherAllPinnedRecipeThunk} from "../services/pinned-recipe-thunk";


const pinnedRecipeSlice = createSlice({
    name: 'PinnedRecipe',
    initialState : {
        pinnedRecipeList: [],
        otherPinnedRecipeList: [],
        loading: false
    },
    reducers: {
        resetPinnedRecipe(state, action) {
            state.pinnedRecipeList = []
        },
    },
    extraReducers: {
        [findAllPinnedRecipeThunk.pending]: (state, action) => {
            state.loading = true
            state.pinnedRecipeList = []
        },
        [findAllPinnedRecipeThunk.fulfilled]: (state, action) => {
            state.pinnedRecipeList = action.payload
            state.loading = false
            console.log(state.pinnedRecipeList)
        },
        [findOtherAllPinnedRecipeThunk.pending]: (state, action) => {
            state.loading = true
            state.otherPinnedRecipeList = []
        },
        [findOtherAllPinnedRecipeThunk.fulfilled]: (state, action) => {
            state.otherPinnedRecipeList = action.payload
            state.loading = false
            console.log(state.otherPinnedRecipeList)
        }
    }
})
export const {resetPinnedRecipe} = pinnedRecipeSlice.actions;
export default pinnedRecipeSlice.reducer