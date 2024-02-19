import { useSnapshot } from 'valtio';

import state from '../store';
import CustomButton from './CustomButton';
import { ai, carrito } from '../assets';

const User = () => {
	const snap = useSnapshot(state);

	return (
		<>
			<div className='absolute z-50 bottom-24 right-5'>
				<CustomButton
					type='avatar'
					title='Login'
					avatar={ai}
					handleClick={() => (snap.intro = false)}
					customStyles='w-fit px-4 py-2.5 font-bold text-sm'
				/>
			</div>
			<div className='absolute z-50 bottom-10 right-5'>
				<CustomButton
					type='avatar'
					title='Carrito'
					avatar={carrito}
					handleClick={() => (snap.intro = false)}
					customStyles='w-fit px-4 py-2.5 font-bold text-sm'
				/>
			</div>
		</>
	);
};

export default User;
