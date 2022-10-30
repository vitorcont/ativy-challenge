import { useEffect, useState } from "react";
import {
	Background,
	Button,
	DataTable,
	DefaultModal,
	Input,
	TableAction,
} from "@portal/components";
import { DataGrid, GridColumns, GridRowProps } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { getMe } from "@portal/redux/User/actions";
import { useReduxState } from "@portal/hooks/useReduxState";
import {
	createTask,
	deleteTask,
	getTasks,
	updateTask,
} from "@portal/redux/Tasks/actions";
import { treatShortDate } from "@portal/utils/date";
import { DateTime } from "luxon";
import { InputForm } from "@portal/components/modules";

const List = () => {
	const { user, tasks } = useReduxState();
	const { me } = user;
	const { taskList } = tasks;

	const [form, setForm] = useState<models.Task>({
		name: "",
		dueDate: "",
		description: "",
	});
	const [doneItems, setDoneItems] = useState<string[]>([]);
	const [visible, setVisible] = useState(false);
	const [modalEdition, setModalEdition] = useState(false);

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
		{
			field: "",
			headerName: "",
			renderCell: (o) => (
				<TableAction
					onDelete={onDeleteTask}
					onEdit={onPressEditTask}
					rowId={o.row.id}
				/>
			),
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

	const onCreateTask = () => {
		setVisible(false);
		dispatch(createTask(form, () => dispatch(getTasks(me?.id!))));
	};

	const onPressEditTask = (id: string) => {
		const taskToEdit = taskList.find((task) => task.id === id);
		setVisible(true);
		setModalEdition(true);
		setForm({
			id: taskToEdit?.id!,
			name: taskToEdit?.name!,
			description: taskToEdit?.description ?? "",
			dueDate: taskToEdit?.dueDate!,
		});
	};

	const onDismissEdition = () => {
		setModalEdition(false);
		setForm({
			name: "",
			description: "",
			dueDate: "",
		});
	};

	const onSubmitEdition = () => {
		setVisible(false);
		setModalEdition(false);
		setForm({
			name: "",
			description: "",
			dueDate: "",
		});
		dispatch(updateTask(form, () => dispatch(getTasks(me?.id!))));
	};

	const onDeleteTask = (id: string) => {
		dispatch(deleteTask(id, () => dispatch(getTasks(me?.id!))));
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
		<Background className="items-center justify-center bg-background">
			<div className="bg-white w-[80%] h-[80%] p-3 rounded-md">
				<Button
					label="Nova Tarefa"
					onPress={() => setVisible(true)}
					className="w-[20%] text-sm h-10"
				/>
				<div className="h-[80%] pt-4 w-[100%]">
					<DataTable
						className="h-14"
						rows={taskList}
						columns={columns}
						checkboxSelection
						onSelectionModelChange={(selectionModel) =>
							onSelectRow(selectionModel!)
						}
						selectionModel={doneItems!}
					/>
				</div>
			</div>
			<DefaultModal
				visible={visible}
				onClose={onDismissEdition}
				setVisible={(value) => setVisible(value)}
				className={"items-center justify-center flex-col"}
			>
				<>
					<InputForm
						fields={[
							{
								label: "Nome da Tarefa",
								className: "w-[100%]",
								value: form.name,
								onChangeText: (value) => setForm({ ...form, name: value }),
							},
							{
								label: "Data Limite",
								className: "w-[100%]",
								value: form.dueDate,
								onChangeText: (value) => setForm({ ...form, dueDate: value }),
							},
							{
								label: "Descrição",
								className: "w-[100%]",
								maxRows: 6,
								multiline: true,
								value: form.description,
								onChangeText: (value) =>
									setForm({ ...form, description: value }),
							},
						]}
					/>
					<Button
						label="Criar"
						onPress={() => (modalEdition ? onSubmitEdition() : onCreateTask())}
					/>
				</>
			</DefaultModal>
		</Background>
	);
};

export default List;
