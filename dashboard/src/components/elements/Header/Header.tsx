import MainLogo from "@portal/assets/svg/ic_logo.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useReduxState } from "@portal/hooks/useReduxState";
import RouteService from "@portal/services/routes";
import { useDispatch } from "react-redux";
import { logout } from "@portal/redux/Auth/actions";

const Header = () => {
	const { user } = useReduxState();
	const { me } = user;
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
	};

	return (
		<div className="absolute w-screen p-2 justify-between top-0 flex bg-primary flex-row items-center">
			<div>
				<img src={MainLogo} className="h-12 ml-6" />
			</div>
			<div className="mr-6 flex flex-row">
				<p className="text-white font-sans bold font-bold text-lg mr-2">{`Olá ${me?.name}!`}</p>
				<button
					className="bg-transparent cursor-pointer border-transparent"
					onClick={() => onLogout()}
				>
					<LogoutIcon className="text-white " />
				</button>
			</div>
		</div>
	);
};

export default Header;
