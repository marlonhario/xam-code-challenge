import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "../Login";
import AuthProvider from "../../../context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

test("renders login page", () => {
	render(
		<AuthProvider>
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		</AuthProvider>
	);
	const branchIdField = screen.getByPlaceholderText(/Branch ID/i);
	const userNameField = screen.getByPlaceholderText(/Username/i);
	const passwordField = screen.getByPlaceholderText(/Password/i);
	const loginButton = screen.getByRole("button", {
		name: /Login/i,
	});
	const headerLogin = screen.getByRole("heading", {
		name: /Login/i,
	});
	const errorLogin = screen.getByText("Error");

	expect(branchIdField).toBeInTheDocument();
	expect(userNameField).toBeInTheDocument();
	expect(passwordField).toBeInTheDocument();
	expect(loginButton).toBeInTheDocument();
	expect(headerLogin).toBeInTheDocument();
	expect(errorLogin).toBeInTheDocument();
});
