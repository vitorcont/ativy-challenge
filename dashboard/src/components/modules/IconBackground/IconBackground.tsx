import { Background } from "@portal/components/elements";
import React from "react";
import WavesIcon from "@portal/assets/svg/ic_background.svg";
import PersonIcon from "@portal/assets/svg/ic_person.svg";
import AppIcon from "@portal/assets/svg/ic_logo.svg";
import { useHistory } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Grid } from "@mui/material";
import "./style.css";

export interface IIconBackgroundProps {
	children: React.ReactNode;
	className?: string;
	goBack?: boolean;
}

const IconBackground = (props: IIconBackgroundProps) => {
	const history = useHistory();

	return (
		<div className='w-screen overflow-y-auto bg-primary overflow-x-hidden'>
			<Background className={`absolute z-50 bg-transparent ${props.className}`}>
				<Grid
					container
					display={"flex"}
					flexDirection='row'
					className='icon-background'
					flexWrap='wrap'
					paddingX={6}
					paddingBottom={2}
				>
					<Grid
						xl={5}
						lg={5}
						md={5}
						sm={12}
						display='flex'
						justifyContent='center'
					>
						<img src={PersonIcon} className='phone-icon' />
					</Grid>
					<Grid xl={4} lg={5} md={5} sm={12} marginTop={1}>
						{props.children}
					</Grid>
				</Grid>
			</Background>
			<img
				src={AppIcon}
				className='absolute w-[35%] top-[50px] left-[5%] z-1'
			/>
			{props.goBack && (
				<div className='absolute w-[30%] top-[0px] left-[2%] z-50'>
					<button
						className='bg-transparent cursor-pointer border-transparent flex flex-row items-center'
						onClick={() => history.goBack()}
					>
						<ArrowCircleLeftIcon className='text-white text-[200px]' />
						<p className='text-white font-sans bold font-bold text-lg ml-1'>
							Voltar
						</p>
					</button>
				</div>
			)}
			<div className='w-screen h-screen overflow-hidden'>
				<img src={WavesIcon} className='waves' />
			</div>
			<div className='bottom-fill' />
		</div>
	);
};

export default IconBackground;
