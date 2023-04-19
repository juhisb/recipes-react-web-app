import {createSlice} from "@reduxjs/toolkit";
import {recipeDetailThunk} from "../services/recipe-detail-thunk";

const recipeDetailSlice = createSlice({
    name: 'recipes',
    initialState : {
        recipeData: [],
        loading: false
    },
    reducers: {},

    extraReducers: {
        [recipeDetailThunk.pending]: (state, action) => {
            state.loading = true
            state.recipeData = []
        },
        [recipeDetailThunk.fulfilled]: (state, {payload}) => {
            console.log(payload)
                state.recipeData = payload
                state.loading = false
        },
        [recipeDetailThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }

    }
})

export default recipeDetailSlice.reducer