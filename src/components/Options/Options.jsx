import Button from '../Button/Button';
import s from './Options.module.css';

const Options = () => {
	return (
		<div className={s.container}>
			<Button>Good</Button>
			<Button>Neutral</Button>
			<Button>Bad</Button>
			<Button>Reset</Button>
		</div>
	);
};

export default Options;
