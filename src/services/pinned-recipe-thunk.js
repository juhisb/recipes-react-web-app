import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllFollowers, addFollower, unfollow} from "./following-service";
import {addPinnedRecipe, findAllPinnedRecipes, findOtherAllPinnedRecipes, removePinnedRecipe} from "./pinned-recipe-service";

export const findAllPinnedRecipeThunk = createAsyncThunk(
    'findAllPinnedRecipe',
    async (userId) => findAllPinnedRecipes(userId)
)


export const findOtherAllPinnedRecipeThunk = createAsyncThunk(
    'findOtherAllPinnedRecipe',
    async (userId) => findOtherAllPinnedRecipes(userId)
)


export const addPinnedRecipeThunk = createAsyncThunk(
    'addPinnedRecipe',
    async (userPinnedRecipe) => await addPinnedRecipe(userPinnedRecipe)
)

export const removePinnedRecipeThunk = createAsyncThunk(
    'removePinnedRecipe',
    async (userDisPinnedRecipe) => await removePinnedRecipe(userDisPinnedRecipe)
)

