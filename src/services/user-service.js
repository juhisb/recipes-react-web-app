import axios from 'axios';
import APP_URL from "../constants";
const api = axios.create({withCredentials: true});

const API_BASE = APP_URL.node_server;

export const findUser = async (userId) => {
    console.log("user", userId)
    const response = await api.get(`${API_BASE}/profile/${userId}`);
    console.log("data" + response)
    return response.data;
}

export const register = async (user) => {
    const response = await api.post(`${API_BASE}/register`, user);
    if (user.accountType == 'REVIEWER') {
        const reviewer = {
            username: user.username,
            password: user.password,
            email: user.email,
            approved: false,
            accountType: user.accountType
        }
        const registerAsReviewer = await api.post(`${API_BASE}/register-reviewer`, reviewer);
        console.log('registered as reviewer');
    }
    return response.data;
}

export const login = async (user) => {
    const response = await api.post(`${API_BASE}/login`, user);
    console.log(response.data)
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${API_BASE}/logout`)
    return response.data
}

export const profile = async () => {
    const response = await api.get(`${API_BASE}/profile`);
    return response.data
}

export const updateProfile = async (user) =>{
    const response = await api.put(`${API_BASE}/profile/${user._id}`, user)
    return user;
}

export const searchByUsername = async (username) => {
    const response = await api.get(`${API_BASE}/searchByUsername/${username}`,username);
    return response.data;
}


export const findUserId = async (username) => {
    const response = await api.get(`${API_BASE}/user/reviewer/${username}`)
    return response.data

}