import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fieldName } from "../constant";
import { loginUser } from "../api/user";
import { useUserContext } from "../context/AuthProvider";

export const useLogin = () => {
	const [errorLogin, setErrorLogin] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();

	const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const payload = Object.fromEntries(formData);
		const invalid = Object.entries(payload).filter((data) => data[1] === "");

		if (invalid.length) {
			setErrorLogin(`${fieldName[invalid[0][0]]} is required`);
		} else {
			setIsLoading(true);
			const loginData = await loginUser(payload);

			if (!loginData.length) {
				setErrorLogin("username or password are invalid.");
			} else if (
				loginData[0].branchId === payload.branchId &&
				loginData[0].userName === payload.userName &&
				loginData[0].password === payload.password
			) {
				sessionStorage.setItem("username", loginData[0].userName);
				setUser(loginData[0].userName);
				navigate("/dashboard");
			} else {
				setErrorLogin("username or password are invalid.");
			}

			setIsLoading(false);
		}
	};

	return { user, submitForm, isLoading, errorLogin };
};
