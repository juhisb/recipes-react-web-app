import axios from 'axios';
import APP_URL from "../constants";

const api = axios.create({withCredentials: true});
const API_BASE = APP_URL.node_server;

export const findAllFollowers = async (userId) => {
    const response = await api.get(`${API_BASE}/follow/${userId}`, userId);
    return response.data
}

export const addFollower = async (follow) => {
    const response = await api.post(`${API_BASE}/follow`, follow);
    return response.data
}
export const unfollow = async (unfollowId) => {
    const response = await api.delete(`${API_BASE}/unfollow/${unfollowId.userId}/${unfollowId.followingId}`, unfollowId)
    return response.data;
}