import React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableProps, Users } from "../../interface/components/table";

export const Table = <T extends Users>({
	headerLabel,
	data,
	handleDeleteUSer,
}: TableProps<T>) => {
	return (
		<div className='dashboard__table'>
			<table>
				<TableHeader data={headerLabel} />
				<TableBody data={data} handleDeleteUSer={handleDeleteUSer} />
			</table>
		</div>
	);
};
