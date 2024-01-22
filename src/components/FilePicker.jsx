import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

const FilePicker = ({ readFile }) => {
	return (
		<div className='filepicker-container'>
			<div className='flex flex-col flex-1'>
				<div className='grid grid-cols-4 grid-rows-2 gap-5'>
					<div className='cursor-pointer'>
						<img
							src={`https://firebasestorage.googleapis.com/v0/b/stampiza2.appspot.com/o/452-respect_the_beard(Respect%20the%20beard).png?alt=media&token=34464818-fdf2-4a4d-ac9d-cc74b4c9a5fd`}
							alt={`Imagen 1`}
							onClick={() => readFile('https://firebasestorage.googleapis.com/v0/b/stampiza2.appspot.com/o/452-respect_the_beard(Respect%20the%20beard).png?alt=media&token=34464818-fdf2-4a4d-ac9d-cc74b4c9a5fd')}
							loading='lazy'
						/>
					</div>
				</div>
			</div>

			<div className='flex flex-wrap gap-3 mt-4'>
				<CustomButton
					type='outline'
					title='Logo'
					handleClick={() => {
						readFile('./673-arana_negra(Araña Negra).png');
					}}
					customStyles='text-xs'
				/>
				<CustomButton
					type='filled'
					title='Clear'
					handleClick={() => readFile('clear')}
					customStyles='text-xs'
				/>
			</div>
		</div>
	);
};

FilePicker.propTypes = {
	file: PropTypes.any,
	setFile: PropTypes.any,
	readFile: PropTypes.any,
};

export default FilePicker;
