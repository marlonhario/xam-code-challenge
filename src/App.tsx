import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import NotFound from "./pages/not-found/NotFound";
import { usersLoader } from "./hooks/dashboard";
import { createContext, useEffect, useState } from "react";
export type ContextType = {
	user: string;
	setUser: React.Dispatch<React.SetStateAction<string>>;
};
export const Context = createContext<any>(null);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Login />} />
			<Route path='dashboard' element={<Dashboard />} loader={usersLoader} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

function App() {
	const [user, setUser] = useState<string | null>("");
	useEffect(() => {
		const authUser = sessionStorage.getItem("username");
		setUser(authUser);
	}, []);

	return (
		<Context.Provider value={{ user, setUser }}>
			<RouterProvider router={router} />
		</Context.Provider>
	);
}

export default App;
