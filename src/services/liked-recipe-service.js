import axios from 'axios';
import APP_URL from "../constants";

const api = axios.create({withCredentials: true});
const API_BASE = APP_URL.node_server;

export const findAllLikedRecipe = async (userId) => {
    const response = await api.get(`${API_BASE}/like/${userId}`, userId);
    return response.data
}

export const findOtherAllLikedRecipe = async (userId) => {
    const response = await api.get(`${API_BASE}/like/${userId}`, userId);
    return response.data
}

export const addLikedRecipe = async (userLikedRecipe) => {
    console.log(userLikedRecipe)
    const response = await api.post(`${API_BASE}/like`, userLikedRecipe);
    return response.data
}

export const removeLikedRecipe = async (userDislikedRecipe) => {
    console.log(userDislikedRecipe)
    const response = await api.post(`${API_BASE}/dislike`, userDislikedRecipe);
    return response.data
}



export const getLikesCount = async (recipeId) => {
    const response = await api.get(`${API_BASE}/likescount/${recipeId}`, recipeId);
    return response.data.length
}

export const getUserLikesRecipe = async (userrecipe) => {
    const response = await api.get(`${API_BASE}/userlikesrecipes/${userrecipe.userId}/${userrecipe.recipeId}`, userrecipe);
    return response.data
}