/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import state from '../store';

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import { useSnapshot } from 'valtio';

const CanvasModel = () => {
	const snap = useSnapshot(state);
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
			className={`w-full h-full max-w-full transition-all ease-in ${
			isTabletOrMobile && snap.intro === true ? 'hidden' : ''
			} `}
			style={{ marginTop: '-5vh' }}
		>
			<ambientLight intensity={0.5} />
			<Environment preset='city' />

			<CameraRig>
				<Shirt />
			</CameraRig>
		</Canvas>
	);
};

export default CanvasModel;
