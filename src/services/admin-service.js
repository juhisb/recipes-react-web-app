import axios from "axios";
import APP_URL from "../constants";

const api = axios.create({withCredentials: true});

const API_BASE = APP_URL.node_server;

export const adminLogin = async (admin) => {
    const response = await api.post(`${API_BASE}/admin/login`, admin);
    return response.data;
}

export const adminProfile = async (admin) => {
    const response = await api.get(`${API_BASE}/admin/profile`);
    return response.data;
}

export const adminLogout = async () => {
    const response = await api.post(`${API_BASE}/admin/logout`)
    return response.data;
}

export const getAdminDetails = async () => {
    const response = await api.get(`${API_BASE}/admin/details`)
    return response.data
}