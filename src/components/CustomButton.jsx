import { useSnapshot } from 'valtio';
import PropTypes from 'prop-types';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, avatar, customStyles, handleClick }) => {
	const snap = useSnapshot(state);

	const generateStyle = (type) => {
		if (type === 'filled') {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color),
				borderRadius: '0.375rem',
			};
		} else if(type === 'outline') {
			return {
				borderWidth: '1px',
				borderColor: snap.color,
				color: snap.color,
				borderRadius: '0.375rem',
			}
		}else if(type === 'avatar') {
			return {
				borderRadius: '9999px',
				padding: '0',
			}
		}
	};

	return (
		<button
			className={`px-2 py-1.5 flex-1 ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{type === 'avatar' ? (
				<img className='w-11 h-11' src={avatar} />
			) : title}
		</button>
	);
};

CustomButton.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	customStyles: PropTypes.string,
	handleClick: PropTypes.func,
};

export default CustomButton;
