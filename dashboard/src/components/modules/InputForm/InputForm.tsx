import { StandardTextFieldProps, TextField } from "@mui/material";
import Input, { IInputProps } from "@portal/components/elements/Input/Input";

export interface IInputFormProps {
	fields: IInputProps[];
}

const InputForm = (props: IInputFormProps) => {
	return (
		<div className="w-[100%]">
			{props.fields.map((field) => (
				<div className={`pb-3 ${field.className}`}>
					<Input className="w-[100%]" {...field} />
				</div>
			))}
		</div>
	);
};

export default InputForm;
