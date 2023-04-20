import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllFollowers, addFollower, unfollow} from "./following-service";

export const findAllFollowersThunk = createAsyncThunk(
    'findAllFollowers',
    async (userId) => findAllFollowers(userId)
)

export const addFollowerThunk = createAsyncThunk(
    'addFollower',
    async (follow) => await addFollower(follow)
)

export const unfollowThunk = createAsyncThunk (
    'unfollow',
        async (unfollowId) => await unfollow(unfollowId)
)