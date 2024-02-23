import { Users } from "../../interface/components/table";

interface Props<T> {
	data: T[];
	handleDeleteUSer: (id: string) => void;
}
export function TableBody<T extends Users>({
	data,
	handleDeleteUSer,
}: Props<T>) {
	return (
		<tbody>
			{data.map((item, index: number) => (
				<tr key={index}>
					<td>{index}</td>
					<td>{item.branchId}</td>
					<td>{item.userName}</td>
					<td>{`${item.firstName} ${item.middleName} ${item.lastName} `}</td>
					<td>{item.position}</td>
					<td>
						<button onClick={() => handleDeleteUSer(item.id)}>REMOVE</button>
					</td>
				</tr>
			))}
		</tbody>
	);
}
