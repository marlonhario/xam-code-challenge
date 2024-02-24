import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "../Login";
import AuthProvider from "../../../context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

const MockLogin = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		</AuthProvider>
	);
};

describe("Login integration testing", () => {
	test("should have branch ID field with placeholder text 'Branch ID'", () => {
		render(<MockLogin />);
		const branchIdField = screen.getByPlaceholderText(/Branch ID/i);

		expect(branchIdField).toBeInTheDocument();
	});

	test("should have user name field with placeholder text 'Username'", () => {
		render(<MockLogin />);
		const userNameField = screen.getByPlaceholderText(/Username/i);

		expect(userNameField).toBeInTheDocument();
	});

	test("should have password field with placeholder text 'Password'", () => {
		render(<MockLogin />);
		const passwordField = screen.getByPlaceholderText(/Password/i);

		expect(passwordField).toBeInTheDocument();
	});

	test("should have login button with text 'LOGIN'", () => {
		render(<MockLogin />);
		const loginButton = screen.getByRole("button", {
			name: /LOGIN/i,
		});

		expect(loginButton).toBeInTheDocument();
	});

	test("should have header with text 'Login'", () => {
		render(<MockLogin />);
		const headerLogin = screen.getByRole("heading", {
			name: /Login/i,
		});

		expect(headerLogin).toBeInTheDocument();
	});

	test("should have paragraph with text 'Error'", () => {
		render(<MockLogin />);
		const errorLogin = screen.getByText("Error");

		expect(errorLogin).toBeInTheDocument();
	});
});
