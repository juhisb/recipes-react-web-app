import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllFollowers, addFollower, unfollow} from "./following-service";
import {addLikedRecipe, findAllLikedRecipe, findOtherAllLikedRecipe, removeLikedRecipe} from "./liked-recipe-service";

export const findAllLikedRecipeThunk = createAsyncThunk(
    'findAllLikedRecipe',
    async (userId) => findAllLikedRecipe(userId)
)

export const findOtherAllLikedRecipeThunk = createAsyncThunk(
    'findOtherAllLikedRecipe',
    async (userId) => findOtherAllLikedRecipe(userId)
)

export const addLikedRecipeThunk = createAsyncThunk(
    'addLikedRecipe',
    async (userLikedRecipe) => await addLikedRecipe(userLikedRecipe)
)

export const removeLikedRecipeThunk = createAsyncThunk(
    'removeLikedRecipe',
    async (userDislikedRecipe) => await removeLikedRecipe(userDislikedRecipe)
)