import { useEffect, useState } from "react";
import reactLogo from "@portal/assets/svg/ic_react.svg";
import { ToastContainer } from "react-toastify";
import ToastService from "@portal/services/toast";

const Login = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		ToastService.success();
	}, []);

	return (
		<div className="flex w-screen h-screen bg-primary items-center justify-center font-[Poppins]">
			<footer className="absolute w-full bottom-5 text-center text-base text-tertiary">
				Gerenciamento Clínicas Odontológias | PUC Campinas
			</footer>
		</div>
	);
};

export default Login;
