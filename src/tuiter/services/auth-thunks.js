import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
	"user/login", async (credentials) => {
		return await authService.login(credentials);
	}
);

export const profileThunk = createAsyncThunk(
	"auth/profile", async () => {
		const response = await authService.profile();
		return response.data;
	});

export const logoutThunk = createAsyncThunk(
	"auth/logout", async () => {
		return await authService.logout();
	});

export const updateUserThunk = createAsyncThunk(
	"user/updateUser", async (user) => {
		await authService.updateUser(user);
		return user;
	});

export const registerThunk = createAsyncThunk(
	"user/register", async ({username, password}) => {
		// const _id = Date.now().toString();
		await authService.registerUser({username, password});
		return {username, password};
	});