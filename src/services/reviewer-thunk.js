import {createAsyncThunk} from "@reduxjs/toolkit";
import {findApprovedReviewer} from "./reviewer-service";

export const findApprovedReviewerThunk = createAsyncThunk (
    'findReviewer',
    async (username) => await findApprovedReviewer(username)
)