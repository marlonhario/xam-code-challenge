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
import { useEffect, useState } from "react";
import { Context } from "./context/context";


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
	const [user, setUser] = useState<string>("");
	useEffect(() => {
		const authUser = sessionStorage.getItem("username");
		setUser(authUser ? authUser : "");
	}, []);

	return (
		<Context.Provider value={{ user, setUser }}>
			<RouterProvider router={router} />
		</Context.Provider>
	);
}

export default App;
