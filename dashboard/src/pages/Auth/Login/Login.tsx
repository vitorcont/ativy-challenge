import { useState } from "react";
import { Button, IconBackground, Input } from "@portal/components";
import { useDispatch } from "react-redux";
import { authenticate } from "@portal/redux/Auth/actions";
import { Link } from "react-router-dom";
import RouteService from "@portal/services/routes";

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
		<IconBackground className='items-end justify-end'>
			<div className='flex flex-col items-center place-items-center p-4 rounded-md mb-[4%]'>
				<p className='text-primary text-center font-sans bold font-semibold text-xl mr-2'>
					Sua plataforma de tarefas e atividades diárias
				</p>
				<div className='w-[100%]'>
					<Input
						value={form.email}
						onChangeText={(value) => setForm({ ...form, email: value })}
						label='Login'
						className='w-[100%] mb-9'
					/>
				</div>
				<div className='pt-6 w-[100%]'>
					<Input
						value={form.password}
						onChangeText={(value) => setForm({ ...form, password: value })}
						label='Senha'
						className='w-[100%]'
						password
					/>
				</div>
				<div className='w-[100%]'>
					<Link to={RouteService.getRouteStackPath("auth", "recovery")}>
						<p className='text-primary underline font-sans bold font-semibold text-sm'>
							Esqueceu sua senha?
						</p>
					</Link>
					<Link to={RouteService.getRouteStackPath("auth", "registration")}>
						<p className='text-primary underline font-sans bold font-semibold text-sm'>
							Não possui uma conta? Clique aqui
						</p>
					</Link>
				</div>
				<Button className='w-[60%]' label='Entrar' onPress={onSubmit} />
			</div>
		</IconBackground>
	);
};

export default Login;
