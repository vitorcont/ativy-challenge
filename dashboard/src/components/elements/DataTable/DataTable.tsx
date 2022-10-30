import { DataGrid, DataGridProps, GridOverlay } from "@mui/x-data-grid";

export interface IDataTableProps extends DataGridProps {
	loading?: boolean;
}

const DataTable = (props: IDataTableProps) => {
	return (
		<DataGrid
			pageSize={20}
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
			{...props}
		/>
	);
};

export default DataTable;
