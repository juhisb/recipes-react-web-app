import {createSlice} from "@reduxjs/toolkit";
import { findApprovedReviewerThunk } from "../services/reviewer-thunk";

const reviewerSlice = createSlice(
    {
        name: 'reviewers',
        initialState: {
            currentReviewer : null,
        },
        extraReducers :{
            [findApprovedReviewerThunk.fulfilled]: (state, action) => {
                state.currentReviewer = action.payload;
            }
        }
    }
)

export default reviewerSlice.reducer