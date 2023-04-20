import {createSlice} from "@reduxjs/toolkit";
import {findAllReviewsForRecipeThunk, findAllReviewsByUserThunk, createReviewThunk, removeReviewThunk, findAverageRatingThunk} from "../services/review-thunk";
import {findAllReviewsForRecipe} from "../services/review-service";

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviewList: [],
        averageRating: 0,
    },
    extraReducers: {
        [findAllReviewsForRecipeThunk.fulfilled]: (state, action) => {
            state.reviewList = action.payload;
            console.log( state.reviewList )
        },
        [findAllReviewsByUserThunk.fulfilled]: (state, action) => {
            state.reviewList = action.payload;

        },
        [createReviewThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.reviewList.push(action.payload)
            console.log(state.reviewList.length)
            state.averageRating = Math.round((state.averageRating + ((action.payload.rating - state.averageRating)/state.reviewList.length)) * 10) /10
        },

        [removeReviewThunk.fulfilled]: (state, { payload }) => {
            console.log(state.reviewList)
            state.reviewList = state.reviewList
                .filter(f => f._id !== payload)
        },
        [findAverageRatingThunk.fulfilled]: (state, action) => {
            state.averageRating = action.payload;
        }
    }

})

export default reviewSlice.reducer