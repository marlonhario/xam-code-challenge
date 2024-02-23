export const TableHeader = ({ data }: { data: String[] }): JSX.Element => {
	return (
		<thead>
			<tr>
				{data.map((title, index) => (
					<th key={index}>{title}</th>
				))}
			</tr>
		</thead>
	);
};
