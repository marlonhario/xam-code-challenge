import React, { useState } from "react";
import { FieldValues, UseFormReturn, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { fieldName, headerLabel } from "../constant";
import { createUser, deleteUser, getUsers } from "../api/user";
import { useUserContext } from "../context/AuthProvider";

export const useDashboard = () => {
	const users: any = useLoaderData();
	const [errorAdd, setErrorAdd] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();
	const methods: UseFormReturn<FieldValues, any, FieldValues> = useForm();

	const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData: any = new FormData(e.currentTarget);
		const payload = Object.fromEntries(formData);
		const invalid = Object.entries(payload).filter((data) => data[1] === "");

		if (invalid.length) {
			setErrorAdd(`${fieldName[invalid[0][0]]} is required`);
		} else {
			setIsLoading(true);
			// send to api for adding
			await createUser(payload);
			setErrorAdd("");
			setIsLoading(false);
			navigate("/dashboard");
		}
	};

	const handleDeleteUSer = (id: string) => {
		deleteUser(id, navigate);
	};

	const handleLogout = () => {
		setUser("");
		sessionStorage.clear();
		navigate("/");
	};

	return {
		headerLabel,
		submitForm,
		methods,
		isLoading,
		errorAdd,
		users,
		user,
		deleteUser,
		handleDeleteUSer,
		handleLogout,
	};
};

// data loader
export const usersLoader = async () => {
	return await getUsers();
};
