import { AddFormProps } from "../../interface/pages/dashboard";

export const AddForm = ({
	submitForm,
	methods,
	isLoading,
	errorAdd,
}: AddFormProps) => {
	return (
		<div className='dashboard__form'>
			<form className='add__form' onSubmit={submitForm}>
				<input type='number' name='branchId' placeholder='Branch ID' />
				<input type='text' name='userName' placeholder='Username' />
				<input type='text' name='firstName' placeholder='First Name' />
				<input type='text' name='middleName' placeholder='Middle Name' />
				<input type='text' name='lastName' placeholder='Last Name' />
				<input type='text' name='position' placeholder='Position' />
				<input type='password' name='password' placeholder='Password' />
				<div className='dashboard__form-actions'>
					<button
						className='dashboard__form-reset'
						type='reset'
						onClick={() => methods.reset()}
					>
						RESET
					</button>
					<button
						className='dashboard__form-add'
						type='submit'
						disabled={isLoading}
					>
						ADD
					</button>
				</div>
			</form>
			<p className={`dashboard__form-error${errorAdd ? " true" : " false"}`}>
				{errorAdd ? errorAdd : ""}
			</p>
		</div>
	);
};
