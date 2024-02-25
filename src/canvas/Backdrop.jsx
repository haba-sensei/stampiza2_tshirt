import { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
	const shadows = useRef();

	return (
		<AccumulativeShadows
			ref={shadows}
			temporal
			
		>
			<RandomizedLight
				amount={4}
				radius={9}
				intensity={0.55}
				ambient={0.25}
				position={[5, 5, -10]}
			/>
			<RandomizedLight
				amount={4}
				radius={5}
				intensity={0.25}
				ambient={0.55}
				position={[-5, 5, -9]}
			/>
		</AccumulativeShadows>
	);
};

export default Backdrop;
