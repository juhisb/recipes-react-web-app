import {createSlice} from "@reduxjs/toolkit";
import {searchThunk} from "../services/search-thunk";

const searchSlice = createSlice({
    name: 'search',
    initialState : {
        searchList: [],
        loading: false
    },
    reducers: {
        resetSearch(state, action) {
            state.searchList = []
        },
    },
    extraReducers: {
        [searchThunk.pending]: (state, action) => {
            state.loading = true
            state.searchList = []
        },
        [searchThunk.fulfilled]: (state, action) => {

            console.log(action.payload)
            state.searchList = action.payload
            state.loading = false
        }
    }
})
export const {resetSearch} = searchSlice.actions;
export default searchSlice.reducer