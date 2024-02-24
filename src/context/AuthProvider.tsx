import React, { createContext, useContext, useEffect, useState } from "react";
export type ContextType = {
	user: string;
	setUser: (data: string) => void;
};
export const AuthContext = createContext<ContextType | undefined>(undefined);

const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useState<string>("");

	useEffect(() => {
		const authUser = sessionStorage.getItem("username");
		setUser(authUser ? authUser : "");
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;

export function useUserContext() {
	const state = useContext(AuthContext);
	if (state === undefined) {
		throw Error("User context failed.");
	}

	return state;
}


