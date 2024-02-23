import { NavigateFunction } from "react-router-dom";
import { serverAPI } from "../constant";

const header = { "content-type": "application/json" };

export const getUsers = async () => {
	const res = await fetch(`${serverAPI}/users`);

	if (!res.ok) {
		throw Error("Could not find any users.");
	}

	return res.json();
};
export const createUser = async (data: { [k: string]: FormDataEntryValue }) => {
	const response = await fetch(`${serverAPI}/users`, {
		method: "POST",
		headers: header,
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		alert("Failed to add user.");
		throw Error("Failed to add user.");
	}
	return response;
};

export const deleteUser = async (id: string, navigate: NavigateFunction) => {
	const response = await fetch(`${serverAPI}/users/` + id, {
		method: "DELETE",
	});

	if (!response.ok) {
		alert("Failed to delete user.");
		throw Error("Failed to delete user.");
	} else {
		navigate("/dashboard");
	}
};

export const loginUser = async (data: { [k: string]: FormDataEntryValue }) => {
	const response = await fetch(`${serverAPI}/users?userName=${data.userName}`);

	if (!response.ok) {
		alert("Failed to login, user not exist.");
		throw Error("Failed to login.");
	}

	return await response.json();
};
