import {
	StandardTextFieldProps,
	TextField,
	TextFieldProps,
} from "@mui/material";

export interface IInputProps extends StandardTextFieldProps {
	onChangeText: (value: string) => void;
}

const Input = (props: IInputProps) => {
	return (
		<TextField
			onChange={(event) => {
				props.onChangeText(event.target.value);
				if (props.onChange) {
					props.onChange(event);
				}
			}}
			{...props}
		/>
	);
};

export default Input;
