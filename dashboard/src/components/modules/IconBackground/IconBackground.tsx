import { Background } from "@portal/components/elements";
import React from "react";
import WavesIcon from "@portal/assets/svg/ic_background.svg";
import PersonIcon from "@portal/assets/svg/ic_person.svg";
import AppIcon from "@portal/assets/svg/ic_logo.svg";

export interface IIconBackgroundProps {
	children: React.ReactNode;
	className?: string;
}

const IconBackground = (props: IIconBackgroundProps) => {
	return (
		<div className="overflow-y-hidden w-screen h-screen bg-primary">
			<Background className={`absolute z-50 bg-transparent ${props.className}`}>
				{props.children}
			</Background>
			<img src={AppIcon} className="absolute w-[30%] top-[5%] left-[5%] z-1" />
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
