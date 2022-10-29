import { useEffect, useState } from "react";
import { Background, Button, Input } from "@portal/components";
import { DataGrid, GridColumns, GridRowProps } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { getMe } from "@portal/redux/User/actions";
import { useReduxState } from "@portal/hooks/useReduxState";
import { getTasks, updateTask } from "@portal/redux/Tasks/actions";
import { treatShortDate } from "@portal/utils/date";
import { DateTime } from "luxon";

const List = () => {
	const { user, tasks } = useReduxState();
	const { me } = user;
	const { taskList } = tasks;

	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [doneItems, setDoneItems] = useState<string[]>([]);
	const dispatch = useDispatch();

	const columns: GridColumns = [
		{ field: "id", flex: 0.1, hide: true },
		{
			field: "name",
			headerName: "Nome",
			flex: 1,
		},
		{
			field: "dueDate",
			headerName: "Data Limite",
			flex: 1,
			// renderCell: (o) => treatShortDate(o.row.dueDate),
		},
		{
			field: "concludedAt",
			headerName: "Data Concluída",
			flex: 1,
			renderCell: (o) => o.row.concludedAt ?? "Pendente",
		},
		{
			field: "createdAt",
			headerName: "Data de Criação",
			renderCell: (o) => treatShortDate(o.row.createdAt),
			flex: 1,
		},
	];

	const onSelectRow = (selected: string[]) => {
		const added = selected.filter((item) => !doneItems.includes(item));
		const removed = doneItems.filter((item) => !selected.includes(item));
		let payload;
		if (added.length) {
			payload = {
				id: added[0],
				concludedAt: DateTime.now().setLocale("en-gb").toLocaleString(),
			};
		} else {
			payload = {
				id: removed[0],
				concludedAt: null,
			};
		}

		dispatch(updateTask(payload, () => dispatch(getTasks(me?.id ?? ""))));
	};

	useEffect(() => {
		dispatch(getMe());
	}, []);

	useEffect(() => {
		if (me) {
			dispatch(getTasks(me.id));
		}
	}, [me]);

	useEffect(() => {
		setDoneItems(
			taskList
				.filter((item) => item.concludedAt!!)
				.map((item) => item.id ?? ""),
		);
	}, [taskList]);

	return (
		<Background className="items-center justify-center">
			<div className="bg-white w-[80%] h-[80%] p-4 rounded-md">
				<DataGrid
					rows={taskList}
					columns={columns}
					pageSize={10}
					checkboxSelection
					onSelectionModelChange={(selectionModel) =>
						onSelectRow(selectionModel)
					}
					selectionModel={doneItems!}
				/>
			</div>
		</Background>
	);
};

export default List;
