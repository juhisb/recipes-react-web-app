import {createSlice} from "@reduxjs/toolkit";
import {recipesThunk} from "../services/recipes-thunk";

const recipesSlice = createSlice({
    name: 'recipes',
    initialState : {
        recipesList: [],
        loading: false
    },
    reducers: {
        hideRecipes(state, action) {
            state.recipesList = []
        }
    },
    extraReducers: {
        [recipesThunk.pending]: (state, action) => {
            state.loading = true
            state.recipesList = []
        },
        [recipesThunk.fulfilled]: (state, {payload}) => {
            console.log(payload)
             if (state.recipesList.length === 0) {
                state.recipesList = payload
                state.loading = false
             }
        },
        [recipesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }

    }
})

export const {hideRecipes} = recipesSlice.actions;
export default recipesSlice.reducer