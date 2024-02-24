import { Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/login";

export const Login = () => {
	const { user, submitForm, isLoading, errorLogin } = useLogin();

	if (user) {
		return <Navigate to='/dashboard' replace={true} />;
	}

	return (
		<div className='login'>
			<h1 className='login__header'>Login</h1>
			<form className='login__form' onSubmit={submitForm}>
				<input
					className='login__field'
					type='text'
					name='branchId'
					placeholder='Branch ID'
				/>
				<input
					className='login__field'
					type='text'
					name='userName'
					placeholder='Username'
				/>
				<input
					className='login__field'
					type='password'
					name='password'
					placeholder='Password'
				/>
				<button className='login__submit' disabled={isLoading}>
					LOGIN
				</button>
			</form>
			<p className={`login__form-error${errorLogin ? " true" : " false"}`}>
				{errorLogin ? errorLogin : "Error"}
			</p>
		</div>
	);
};
