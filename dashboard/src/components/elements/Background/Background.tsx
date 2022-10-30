import React from "react";

export interface IBackgroundProps {
	children: React.ReactNode;
	className?: string;
}

const Background = (props: IBackgroundProps) => {
	return (
		<div
			className={`
      flex 
      w-screen 
      h-screen 
      bg-primary 
			overflow-y-hidden
      ${props.className}
      `}
		>
			{props.children}
		</div>
	);
};

export default Background;
