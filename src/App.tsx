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
import AuthProvider from "./context/AuthProvider";

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
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
}

export default App;
