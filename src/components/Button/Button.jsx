const Button = ({ children, onHandleClick, isVisible = true }) => {
	return (
		<button
			onClick={() => onHandleClick(children)}
			style={{ display: isVisible ? 'inline-block' : 'none' }}
		>
			{children}
		</button>
	);
};

export default Button;
