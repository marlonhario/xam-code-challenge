import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {

	return (
		<div className='root-layout'>
			<ScrollRestoration />
			<Outlet />
		</div>
	);
}
