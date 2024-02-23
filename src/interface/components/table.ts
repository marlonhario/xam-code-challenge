export interface Users {
	branchId: number;
	firstName: string;
	lastName: string;
	middleName: string;
	password: string;
	position: string;
	userName: string;
	id: string;
}

export interface TableProps<T> {
	data: T[];
	headerLabel: String[];
	handleDeleteUSer: (id: string) => void;
}
