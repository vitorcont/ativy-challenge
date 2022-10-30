import {
	DataGrid,
	DataGridProps,
	GridColumns,
	GridOverlay,
} from "@mui/x-data-grid";
import { TableAction } from "@portal/components";

export interface IDataTableProps extends DataGridProps {
	loading?: boolean;
	onEditRow?: (id: string) => void;
	onDeleteRow?: (id: string) => void;
}

const DataTable = (props: IDataTableProps) => {
	const tableActions: GridColumns = [
		{
			field: "",
			headerName: "",
			renderCell: (o) => (
				<TableAction
					onDelete={props.onDeleteRow ? props.onDeleteRow : (id) => {}}
					onEdit={props.onEditRow ? props.onEditRow : (id) => {}}
					rowId={o.row.id}
				/>
			),
			align: "center",
			flex: 0.25,
		},
	];

	return (
		<DataGrid
			{...props}
			pageSize={20}
			columns={[
				...props.columns,
				...(props.onEditRow && props.onDeleteRow ? tableActions : []),
			]}
			hideFooterPagination
			checkboxSelection
			disableSelectionOnClick
			components={{
				NoRowsOverlay: () => (
					<GridOverlay>
						Você ainda não possui tarefas cadastradas! Clique no botão acima e
						comece a organizar as suas tarefas!
					</GridOverlay>
				),
			}}
			localeText={{
				footerTotalVisibleRows: (visibleCount, totalCount) =>
					`${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
				footerRowSelected: (count) => `${count} atividades finalizadas`,
			}}
		/>
	);
};

export default DataTable;
