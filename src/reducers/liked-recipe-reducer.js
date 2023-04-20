import {createSlice} from "@reduxjs/toolkit";
import {findAllLikedRecipeThunk, findOtherAllLikedRecipeThunk} from "../services/liked-recipe-thunk";


const likedRecipeSlice = createSlice({
    name: 'likedRecipe',
    initialState : {
        likedRecipeList: [],
        otherLikedRecipeList: [],
        loading: false
    },
    reducers: {
        resetLikedRecipe(state, action) {
            state.likedRecipeList = []
        },
    },
    extraReducers: {
        [findAllLikedRecipeThunk.pending]: (state, action) => {
            state.loading = true
            state.likedRecipeList = []
        },
        [findAllLikedRecipeThunk.fulfilled]: (state, action) => {
            state.likedRecipeList = action.payload
            state.loading = false
            console.log(state.likedRecipeList)
        },
        [findOtherAllLikedRecipeThunk.pending]: (state, action) => {
            state.loading = true
            state.otherLikedRecipeList = []
        },
        [findOtherAllLikedRecipeThunk.fulfilled]: (state, action) => {
            state.otherLikedRecipeList = action.payload
            state.loading = false
            console.log(state.otherLikedRecipeList)
        }
    }
})
export const {resetLikedRecipe} = likedRecipeSlice.actions;
export default likedRecipeSlice.reducer