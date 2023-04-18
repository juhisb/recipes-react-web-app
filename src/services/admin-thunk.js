<<<<<<< HEAD
import {addReviewer, adminLogin, adminLogout, getAdminDetails, getReviewerList} from "./admin-service";
=======
import { adminLogin, adminLogout, getAdminDetails} from "./admin-service";
>>>>>>> master
import {createAsyncThunk} from "@reduxjs/toolkit";

export const adminLoginThunk = createAsyncThunk(
    'adminLogin',
    async (admin) => await adminLogin(admin)
)

export const adminLogoutThunk = createAsyncThunk(
    'adminLogout',
    async () => await adminLogout()
)

<<<<<<< HEAD
export const getReviewerListThunk = createAsyncThunk(
    'getReviewerList',
    async (adminId) => await getReviewerList(adminId)
)

export const addReviewerThunk = createAsyncThunk(
    'addReviewer',
    async (reviewerId) => await addReviewer(reviewerId)
)

=======
>>>>>>> master
export const getAdminDetailsThunk = createAsyncThunk (
    'getAdminDetails',
    async () => await getAdminDetails()
)