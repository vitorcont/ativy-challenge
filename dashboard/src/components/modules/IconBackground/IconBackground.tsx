import { Background } from "@portal/components/elements";
import React from "react";
import WavesIcon from "@portal/assets/svg/ic_background.svg";
import PersonIcon from "@portal/assets/svg/ic_person.svg";
import AppIcon from "@portal/assets/svg/ic_logo.svg";
import { useHistory } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export interface IIconBackgroundProps {
	children: React.ReactNode;
	className?: string;
	goBack?: boolean;
}

const IconBackground = (props: IIconBackgroundProps) => {
	const history = useHistory();

	return (
		<div className="overflow-y-hidden w-screen h-screen bg-primary">
			<Background className={`absolute z-50 bg-transparent ${props.className}`}>
				{props.children}
			</Background>
			<img src={AppIcon} className="absolute w-[30%] top-[5%] left-[5%] z-1" />
			{props.goBack && (
				<div className="absolute w-[30%] top-[0.5%] left-[2%] z-50">
					<button
						className="bg-transparent cursor-pointer border-transparent flex flex-row items-center"
						onClick={() => history.goBack()}
					>
						<ArrowCircleLeftIcon className="text-white text-[200px]" />
						<p className="text-white font-sans bold font-bold text-lg ml-1">
							Voltar
						</p>
					</button>
				</div>
			)}
			<div className="absolute h-[100%] overflow-y-hidden">
				<img src={WavesIcon} className="w-screen z-1 " />
			</div>
			<img
				src={PersonIcon}
				className="absolute w-[40%] left-[5%] bottom-[8%] z-1"
			/>
		</div>
	);
};

export default IconBackground;
