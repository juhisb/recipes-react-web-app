import {createSlice} from "@reduxjs/toolkit";
import {
    getAdminDetailsThunk,
    adminLoginThunk,
    adminLogoutThunk, adminProfileThunk
} from "../services/admin-thunk";

const adminSlice = createSlice({
        name: 'admin',
        initialState: {
            currentAdmin: null
        },

        extraReducers: {
            [adminLoginThunk.fulfilled]: (state, action) => {
                console.log("action" + action.payload)
                state.currentAdmin = action.payload
                state.currentAdmin = {...state.currentAdmin, currentAdmin: action.payload}
                console.log("red " + state)
            },
            [adminLoginThunk.rejected]: (state, action) => {
                state.currentAdmin = null;
            },
            [adminProfileThunk.fulfilled]: (state, action) => {
                state.currentAdmin = action.payload
                state.currentAdmin = {...state.currentAdmin, currentAdmin: action.payload}

            },
            [adminProfileThunk.rejected]: (state, action) => {
                state.currentAdmin = null;
            },
            [getAdminDetailsThunk.fulfilled]: (state, action) => {
                state.currentAdmin = action.payload
                console.log("red " + state)
            },
            [adminLogoutThunk.fulfilled]: (state, action) => {
                state.currentAdmin = null;
            }
        }
    }
)

export default adminSlice.reducer;