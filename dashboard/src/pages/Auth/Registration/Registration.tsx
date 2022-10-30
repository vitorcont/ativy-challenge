import { useEffect, useState } from "react";
import { Button, IconBackground, InputForm } from "@portal/components";
import { useDispatch } from "react-redux";
import { validateEmpty, validateEqual } from "@portal/utils/validators";
import ToastService from "@portal/services/toast";
import { createUser, getAddress } from "@portal/redux/User/actions";
import { useReduxState } from "@portal/hooks/useReduxState";

const Registration = () => {
	const { user } = useReduxState();
	const { address } = user;
	const [form, setForm] = useState({
		name: "",
		birth: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		zipcode: "",
		street: "",
		district: "",
		city: "",
		state: "",
	});
	const [step, setStep] = useState(1);
	const dispatch = useDispatch();

	const onSubmit = () => {
		if (step === 1) {
			if (
				validateEmpty(form.name) &&
				validateEmpty(form.email) &&
				validateEqual(form.password, form.passwordConfirmation)
			) {
				setStep(2);
			} else {
				ToastService.error(
					"Ops, verifique se todos os dados estão válidos e tente novamente.",
				);
			}
		} else {
			if (
				validateEmpty(form.zipcode) &&
				validateEmpty(form.street) &&
				validateEmpty(form.district) &&
				validateEmpty(form.city) &&
				validateEmpty(form.state)
			) {
				dispatch(createUser(form));
			} else {
				ToastService.error(
					"Ops, verifique se todos os dados estão válidos e tente novamente.",
				);
			}
		}
	};

	const searchAddress = () => {
		if (form.zipcode.length === 8) {
			dispatch(getAddress(form.zipcode));
		}
	};

	useEffect(() => {
		if (address) {
			setForm({
				...form,
				street: address.logradouro,
				district: address.bairro,
				city: address.localidade,
				state: address.uf,
			});
		}
	}, [address]);

	return (
		<IconBackground className="items-end justify-end" goBack>
			<div className=" w-1/4 flex flex-col items-center place-items-center p-4 rounded-md mb-[1%] mr-[10%]">
				<p className="text-primary text-center font-sans bold font-semibold text-lg mb-4 w-[65%]">
					Insira seus dados e vamos começar a organizar o seu dia juntos!
				</p>
				<div className="w-[100%]">
					{step === 1 ? (
						<InputForm
							fields={[
								{
									label: "Nome",
									value: form.name,
									onChangeText: (value) => setForm({ ...form, name: value }),
								},
								{
									label: "Data de nascimento",
									value: form.birth,
									dateInput: true,
									onChangeText: (value) => setForm({ ...form, birth: value }),
								},
								{
									label: "Email",
									value: form.email,
									onChangeText: (value) => setForm({ ...form, email: value }),
								},
								{
									label: "Senha",
									value: form.password,
									password: true,
									onChangeText: (value) =>
										setForm({ ...form, password: value }),
								},
								{
									label: "Confirmar Senha",
									value: form.passwordConfirmation,
									password: true,
									onChangeText: (value) =>
										setForm({ ...form, passwordConfirmation: value }),
								},
							]}
						/>
					) : (
						<InputForm
							fields={[
								{
									label: "CEP",
									value: form.zipcode,
									onChangeText: (value) => setForm({ ...form, zipcode: value }),
									onBlur: () => searchAddress(),
									inputProps: { maxLength: 8 },
								},
								{
									label: "Rua",
									value: form.street,
									onChangeText: (value) => setForm({ ...form, street: value }),
								},
								{
									label: "Bairro",
									value: form.district,
									onChangeText: (value) =>
										setForm({ ...form, district: value }),
								},
								{
									label: "Cidade",
									value: form.city,
									onChangeText: (value) => setForm({ ...form, city: value }),
								},
								{
									label: "Estado",
									value: form.state,
									onChangeText: (value) => setForm({ ...form, state: value }),
								},
							]}
						/>
					)}
				</div>
				<Button
					className="w-[60%]"
					label={step === 1 ? "Próximo" : "Cadastrar"}
					onPress={onSubmit}
				/>
			</div>
		</IconBackground>
	);
};

export default Registration;
