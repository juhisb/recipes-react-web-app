import axios from "axios";
import APP_URL from "../constants";

const API_BASE = APP_URL.node_server;

export const findAllReviewsForRecipe = async (recipeId) => {
    const response = await axios.get(`${API_BASE}/review/recipe/${recipeId}`);
    return response.data;
}

export const findAllReviewsByUser = async (userId) => {
    const response = await axios.get(`${API_BASE}/review/user/${userId}`);
    return response.data;
}

export const createReview = async (review) => {

    const response = await axios.post(`${API_BASE}/review`, review)
    return response.data;
}

export const removeReview = async (reviewId) => {
    const response = await axios.delete(`${API_BASE}/remove-review/${reviewId}`)
    return response.data;
}

export const findAverageRating = async (recipeId) => {
    const response = await axios.get(`${API_BASE}/review/avg-rating/${recipeId}`);
    return response.data;
}