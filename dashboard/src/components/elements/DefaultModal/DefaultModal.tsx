import { Modal, Box, Typography } from "@mui/material";
import { ReactElement, JSXElementConstructor } from "react";

export interface IDefaultModalProps {
	visible: boolean;
	setVisible: (value: boolean) => void;
	onClose?: () => void;
	className?: string;
	children: ReactElement<any, string | JSXElementConstructor<any>>;
}

const DefaultModal = (props: IDefaultModalProps) => {
	return (
		<Modal
			open={props.visible}
			onClose={() => {
				props.setVisible(false);
				if (props.onClose) {
					props.onClose();
				}
			}}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<div
				className={`bg-white rounded-md p-8 self-center justify-self-center w-[60%] flex ${props.className}`}
			>
				{props.children}
			</div>
		</Modal>
	);
};

export default DefaultModal;
