import { Table } from "../../components/table/Table";
import { AddForm } from "./AddForm";
import { useDashboard } from "../../hooks/dashboard";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
	const {
		headerLabel,
		submitForm,
		methods,
		isLoading,
		errorAdd,
		users,
		user,
		handleDeleteUSer,
		handleLogout,
	} = useDashboard();

	if (!user) {
		return <Navigate to='/' replace={true} />;
	}

	return (
		<div className='dashboard'>
			<div className='dashboard__header'>
				<h1 className='dashboard__user'>{user}</h1>
				<button className='dashboard__logout' onClick={handleLogout}>
					LOGOUT
				</button>
			</div>
			<div className='dashboard__body'>
				<AddForm
					submitForm={submitForm}
					methods={methods}
					isLoading={isLoading}
					errorAdd={errorAdd}
				/>
				<Table
					headerLabel={headerLabel}
					data={users}
					handleDeleteUSer={handleDeleteUSer}
				/>
			</div>
		</div>
	);
};
