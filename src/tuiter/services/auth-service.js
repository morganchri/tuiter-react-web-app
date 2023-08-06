import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL_LOCAL || process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

console.log("server api url");
console.log(SERVER_API_URL);

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
	const response = await api.post(`${USERS_URL}/login`, { username, password });
	return response.data;
};


export const logout = async () => {
	const response = await api.post(`${USERS_URL}/logout`);
	return response.data;
};

export const profile = async () => {
	const response = await api.post(`${USERS_URL}/profile`);
	return response;
};


export const updateUser = async (user) => {
	const response = await api.put(`${USERS_URL}/${user._id}`, user);
	return response.data;
};


export const registerUser = async ({ username, password, _id }) => {
	const response = await api.post(`${USERS_URL}/register`, {username, password, _id: _id});
	return response.data;
};