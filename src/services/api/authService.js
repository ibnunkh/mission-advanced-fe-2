import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const loginAPI = (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
};

export const registerAPI = (data) => {
    return axios.post(`${API_URL}/register`, data);
};

export const getProfileAPI = () => {
    return axios.get(`${API_URL}/profile`);
};

export const updateProfileAPI = (data) => {
    return axios.put(`${API_URL}/profile`, data);
};

export const deleteProfileAPI = (id) => {
    return axios.delete(`${API_URL}/profile/${id}`);
};