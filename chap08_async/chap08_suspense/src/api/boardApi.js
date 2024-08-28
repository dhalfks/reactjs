import axios from 'axios';

const API_URL = 'http://localhost:8085/company/boards'; // 서버 URL

export const getBoards = () => axios.get(API_URL);
export const getBoardById = (id) => axios.get(`${API_URL}/${id}`);
export const createBoard = (data) => axios.post(API_URL, data);
export const updateBoard = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBoard = (id) => axios.delete(`${API_URL}/${id}`);