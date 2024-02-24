import { createContext, useContext } from "react";

export type ContextType = {
	user: string;
	setUser: (data: string) => void;
};
export const Context = createContext<ContextType | undefined>(undefined);

export function useUserContext() {
	const state = useContext(Context);
	if (state === undefined) {
		throw Error("User context failed.");
	}

	return state;
}
