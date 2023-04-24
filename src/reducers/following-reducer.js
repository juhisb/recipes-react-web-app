import {createSlice} from "@reduxjs/toolkit";
import {findAllFollowersThunk, addFollowerThunk, unfollowThunk} from "../services/following-thunk";

const followingSlice = createSlice({
    name: 'following',
    initialState: {
        followingList: [],
        followers:[],
        loading: false
    },

    extraReducers: {
        [findAllFollowersThunk.fulfilled]: (state, action) => {


            state.followingList = action.payload;
            state.followers = state.followingList.followers;
            state.loading = false;
        },
        [findAllFollowersThunk.pending]: (state, action) => {
           state.loading = true;
           state.followingList = [];
        },
        [findAllFollowersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.followingList = [];
        },
        [addFollowerThunk.fulfilled]: (state, action) => {
            state.followingList.followers.push(action.payload)
        },

        [unfollowThunk.fulfilled]: (state, action) => {
            state.followingList.followers = state.followingList.followers
                .filter(f => f.userId !== action.payload.userId && f.followingId !== action.payload.followingId)


        }
    }

})

export default followingSlice.reducer
export const {makeListNull} = followingSlice.actions