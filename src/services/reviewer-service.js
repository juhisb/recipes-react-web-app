import axios from 'axios';
import APP_URL from "../constants";

const api = axios.create({withCredentials: true});

const API_BASE = APP_URL.node_server + '/reviewer';

export const getPendingReviewers = async () => {
    const response = await api.get(`${API_BASE}/pending`)
    return response.data
}

export const updateReviewer = async (reviewer) => {
    const response = await api.put(`${API_BASE}/update/${reviewer._id}`, reviewer)
    return response.data
}

export const deleteReviewer = async (rId) => {
    const response = await api.delete(`${API_BASE}/delete/${rId}`);
    return response.data
}

export const findReviewer = async (rId) => {
    const response = await api.get(`${API_BASE}/${rId}`);
    return response.data
}

export const findApprovedReviewer = async (username) => {
    const response = await api.get(`${API_BASE}/user/${username}`);
    return response.data
}

export const getApprovedReviewers = async () => {
    const response = await api.get(`${API_BASE}/approved`);
    return response.data
}