import loadingIndicator from "@portal/assets/svg/ic_loading.svg";

export interface IButtonProps {
	label: string;
	onPress: () => void;
	className?: string;
	loading?: boolean;
}

const Button = (props: IButtonProps) => {
	return (
		<button
			type={"submit"}
			className={`
        text-2xl 
        font-medium
        text-white 
        w-[100%] 
        h-12 mt-5
        bg-primary 
        border-transparent 
        m-0 
        rounded-xl 
        cursor-pointer 
        hover:opacity-95
        ${props.className}
      `}
			onClick={props.onPress}
		>
			{props.loading ? (
				<img
					className="w-10 h-[100%]"
					src={loadingIndicator}
					alt="loading logo"
				/>
			) : (
				props.label
			)}
		</button>
	);
};

export default Button;
