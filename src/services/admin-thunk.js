import { adminLogin, adminLogout, getAdminDetails} from "./admin-service";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const adminLoginThunk = createAsyncThunk(
    'adminLogin',
    async (admin) => await adminLogin(admin)
)

export const adminLogoutThunk = createAsyncThunk(
    'adminLogout',
    async () => await adminLogout()
)

export const getAdminDetailsThunk = createAsyncThunk (
    'getAdminDetails',
    async () => await getAdminDetails()
)