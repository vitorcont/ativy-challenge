import {
	StandardTextFieldProps,
	TextField,
	TextFieldProps,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DayNumbers } from "luxon";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { fromFormatToFormat } from "@portal/utils/date";

export interface IInputProps extends StandardTextFieldProps {
	onChangeText: (value: string) => void;
	dateInput?: boolean;
}

const Input = (props: IInputProps) => {
	const [value, setValue] = useState<Dayjs | null>(null);
	return (
		<>
			{props.dateInput ? (
				<LocalizationProvider adapterLocale={"ptBR"} dateAdapter={AdapterDayjs}>
					<DatePicker
						value={fromFormatToFormat(props.value, "dd/mm/yyyy", "yyyy-mm-dd")}
						onChange={(val: Dayjs | null) => {
							if (val) {
								props.onChangeText(val.format("DD/MM/YYYY"));
							}
						}}
						className={props.className}
						inputFormat="DD/MM/YYYY"
						mask="__/__/____"
						InputProps={{}}
						renderInput={(params) => (
							<TextField
								onChange={(event) => {
									props.onChangeText(event.target.value);
									if (props.onChange) {
										props.onChange(event);
									}
								}}
								inputProps={{ maxLength: 9 }}
								{...params}
							/>
						)}
					/>
				</LocalizationProvider>
			) : (
				<TextField
					onChange={(event) => {
						props.onChangeText(event.target.value);
						if (props.onChange) {
							props.onChange(event);
						}
					}}
					{...props}
				/>
			)}
		</>
	);
};

export default Input;
