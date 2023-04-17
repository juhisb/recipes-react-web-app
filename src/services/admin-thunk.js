import {addReviewer, adminLogin, adminLogout, getAdminDetails, getReviewerList} from "./admin-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const adminLoginThunk = createAsyncThunk(
    'adminLogin',
    async (admin) => await adminLogin(admin)
)

export const adminLogoutThunk = createAsyncThunk(
    'adminLogout',
    async () => await adminLogout()
)

export const getReviewerListThunk = createAsyncThunk(
    'getReviewerList',
    async (adminId) => await getReviewerList(adminId)
)

export const addReviewerThunk = createAsyncThunk(
    'addReviewer',
    async (reviewerId) => await addReviewer(reviewerId)
)

export const getAdminDetailsThunk = createAsyncThunk (
    'getAdminDetails',
    async () => await getAdminDetails()
)