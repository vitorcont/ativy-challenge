import { useEffect, useState } from "react";
import ToastService from "@portal/services/toast";
import { Background, Button, Input } from "@portal/components";
import { useDispatch } from "react-redux";
import { authenticate } from "@portal/redux/Auth/actions";

const Login = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();

	const onSubmit = () => {
		dispatch(authenticate(form));
	};

	return (
		<Background className="items-center justify-center">
			<div className="bg-white w-1/3 place-items-center p-4 rounded-md">
				<div>
					<Input
						value={form.email}
						onChangeText={(value) => setForm({ ...form, email: value })}
						label="Login"
						className="w-[100%] mb-9"
					/>
				</div>
				<div className="pt-10">
					<Input
						value={form.password}
						onChangeText={(value) => setForm({ ...form, password: value })}
						label="Senha"
						className="w-[100%]"
					/>
				</div>
				<Button label="Login" onPress={onSubmit} />
			</div>
		</Background>
	);
};

export default Login;
