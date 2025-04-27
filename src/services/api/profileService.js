import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getProfileAPI = async () => {
    return axios.get(`${API_URL}/profile`);
};

export const updateProfileAPI = async (data) => {
    return axios.put(`${API_URL}/profile`, data);
};