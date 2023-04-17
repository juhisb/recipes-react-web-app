import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, logout, register, profile, updateProfile, findUser} from "./user-service"

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (credentials) => await login(credentials)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const updateProfileThunk = createAsyncThunk(
    'updateProfile',
    async (user) => await updateProfile(user)
)

export const findUserThunk = createAsyncThunk(
    'findUser',
    async (userId) => await findUser(userId)
)