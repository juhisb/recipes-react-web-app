import axios from 'axios';
import APP_URL from "../constants";

const api = axios.create({withCredentials: true});
const API_BASE = APP_URL.node_server;

export const findAllPinnedRecipes = async (userId) => {
    const response = await api.get(`${API_BASE}/pin/${userId}`, userId);
    return response.data
}

export const findOtherAllPinnedRecipes = async (userId) => {
    const response = await api.get(`${API_BASE}/pin/${userId}`, userId);
    return response.data
}

export const addPinnedRecipe = async (userPinnedRecipe) => {
    console.log(userPinnedRecipe)
    const response = await api.post(`${API_BASE}/pin`, userPinnedRecipe);
    return response.data
}

export const removePinnedRecipe = async (userUnpinnedRecipe) => {
    console.log(userUnpinnedRecipe)
    const response = await api.post(`${API_BASE}/unpin`, userUnpinnedRecipe);
    return response.data
}

export const getPinCount = async (recipeId) => {
    const response = await api.get(`${API_BASE}/pinCount/${recipeId}`, recipeId);
    return response.data.length
}

export const getUserPinnedRecipe = async (userRecipe) => {
    const response = await api.get(`${API_BASE}/userPinnedRecipe/${userRecipe.userId}/${userRecipe.recipeId}`, userRecipe);
    return response.data
}
