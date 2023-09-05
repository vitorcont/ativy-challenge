import { useState } from "react";
import { Button, IconBackground, Input } from "@portal/components";
import { useDispatch } from "react-redux";
import { recovery } from "@portal/redux/Auth/actions";

const Recovery = () => {
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const onSubmit = () => {
		dispatch(recovery(email));
	};

	return (
		<IconBackground className='items-end justify-end' goBack>
			<div className=' flex flex-col items-center place-items-center p-4 rounded-md mb-[4%] mr-[10%]'>
				<p className='text-primary text-center font-sans bold font-semibold text-lg mb-8'>
					Esqueceu sua senha? Não tem problema, podemos te ajudar com isso,
					basta inserir seu email abaixo!
				</p>
				<div className='w-[100%] pb-6'>
					<Input
						value={email}
						onChangeText={setEmail}
						label='Email'
						className='w-[100%]'
					/>
				</div>
				<p className='text-primary text-center font-sans bold font-semibold text-lg mb-4'>
					Você receberá um email com a nova senha de sua conta!
				</p>
				<Button className='w-[60%]' label='Enviar' onPress={onSubmit} />
			</div>
		</IconBackground>
	);
};

export default Recovery;
