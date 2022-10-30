import { Button, DefaultModal, InputForm } from "@portal/components";

export interface ITaskModalProps {
	form: models.Task;
	setForm: (data: models.Task) => void;
	visible: boolean;
	setVisible: (value: boolean) => void;
	onDimiss: () => void;
	onSubmit: () => void;
	buttonLabel: string;
}

const TaskModal = (props: ITaskModalProps) => {
	return (
		<DefaultModal
			visible={props.visible}
			onClose={props.onDimiss}
			setVisible={(value) => props.setVisible(value)}
		>
			<div className="items-center justify-center flex flex-col">
				<InputForm
					fields={[
						{
							label: "Nome da Tarefa",
							className: "w-[100%]",
							value: props.form.name,
							onChangeText: (value) =>
								props.setForm({ ...props.form, name: value }),
						},
						{
							label: "Data Limite",
							className: "w-[100%]",
							dateInput: true,
							value: props.form.dueDate,
							onChangeText: (value) =>
								props.setForm({ ...props.form, dueDate: value }),
						},
						{
							label: "Descrição",
							className: "w-[100%]",
							maxRows: 6,
							multiline: true,
							value: props.form.description,
							onChangeText: (value) =>
								props.setForm({ ...props.form, description: value }),
						},
					]}
				/>
				<Button
					className="w-[30%]"
					label={props.buttonLabel}
					onPress={() => props.onSubmit()}
				/>
			</div>
		</DefaultModal>
	);
};

export default TaskModal;
