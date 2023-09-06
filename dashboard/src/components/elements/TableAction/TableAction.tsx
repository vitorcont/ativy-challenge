import { Modal, Box, Typography, Popover, Button } from "@mui/material";
import { ReactElement, JSXElementConstructor, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface ITableActionProps {
	rowId: string;
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
	className?: string;
}

const TableAction = (props: ITableActionProps) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<>
			<div
				id={id}
				className='cursor-pointer rounded-lg p-1 hover:bg-slate-200'
				onClick={handleClick as any}
			>
				<MoreVertIcon />
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<div className='flex-col flex p-1'>
					<Button color='success' onClick={() => props.onEdit(props.rowId)}>
						Editar
					</Button>
					<Button color='error' onClick={() => props.onDelete(props.rowId)}>
						Deletar
					</Button>
				</div>
			</Popover>
		</>
	);
};

export default TableAction;
