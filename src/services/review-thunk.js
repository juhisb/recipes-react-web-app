import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllReviewsForRecipe, findAllReviewsByUser, createReview, removeReview, findAverageRating } from "./review-service.js";

export const findAllReviewsForRecipeThunk = createAsyncThunk(
    'findAllReviewsForRecipe',
    async (recipeId) => await findAllReviewsForRecipe(recipeId)
)

export const findAllReviewsByUserThunk = createAsyncThunk(
    'findAllReviewsByUser',
    async (userId) => await findAllReviewsByUser(userId)
)

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => await createReview(review)
)

export const removeReviewThunk = createAsyncThunk(
    'removeReview',
    async (reviewId) => {
        await removeReview(reviewId)
        return reviewId
    }
)

export const findAverageRatingThunk = createAsyncThunk(
    'findAverageRating',
    async (recipeId) => await findAverageRating(recipeId)
)
