import { toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IOptions {
	theme: "colored" | "light" | "dark";
	autoClose: number;
	closeButton: boolean;
	pauseOnHover: boolean;
	toastId: string;
	position: ToastPosition;
}

const options: IOptions = {
	toastId: "prevent-multiple",
	autoClose: 3000,
	closeButton: true,
	pauseOnHover: false,
	theme: "light",
	position: toast.POSITION.TOP_RIGHT,
};

const ToastService = {
	success: (value?: string, autoClose?: number) =>
		toast.success(
			value ?? "Sucesso!",
			autoClose ? { ...options, [autoClose]: autoClose } : options,
		),
	error: (value?: string, autoClose?: number) =>
		toast.error(
			value ?? "Erro",
			autoClose ? { ...options, [autoClose]: autoClose } : options,
		),
	promise: (
		promise: Promise<void>,
		pending?: string,
		success?: string,
		error?: string,
	) =>
		toast.promise(
			promise,
			{
				pending,
				success,
				error,
			},
			options,
		),
};
export default ToastService;
