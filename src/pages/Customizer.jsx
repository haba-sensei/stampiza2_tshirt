import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { FilterTabs} from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
	const snap = useSnapshot(state);
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true
	});

	const handleActiveFilterTab = (tabName) => {
		switch (tabName) {
			case 'logoShirt':
				state.isLogoTexture = !activeFilterTab[tabName];
				break;
			case 'clearLogo':
				state.logoDecal = './832-daredevil(Daredevil).png';
				break;
			case 'changeColor':
				state.color = state.color === '#4A4A4A' ? '#FFFFFF' : '#4A4A4A';
				break;
			default:
				state.color = '#4A4A4A';
				state.isLogoTexture = true;
		}

		setActiveFilterTab((prevState) => {
			return {
				...prevState,
				[tabName]: !prevState[tabName],
			};
		});
	};

	const readFile = (type) => {
		if(type === 'clear') handleActiveFilterTab('clearLogo')
		else
		state.logoDecal = type;
	};

	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					<motion.div
						key='custom'
						className='absolute top-0 left-0 z-10'
						{...fadeAnimation}
					>
						<div className='flex items-center min-h-screen'> 
							<FilePicker	readFile={readFile}	/>
						</div>
					</motion.div>
					<motion.div
						className='absolute z-10 top-5 right-5'
						{...fadeAnimation}
					>
						<CustomButton
							type='filled'
							title='Go Back'
							handleClick={() =>  (state.intro = true)}
							customStyles='w-fit px-4 py-2.5 font-bold text-sm'
						/>
					</motion.div>
					<motion.div
						className='absolute z-11 bottom-10 right-5'
						{...fadeAnimation}
					>
						<CustomButton
							type='filled'
							title='Go Back'
							handleClick={() =>  (state.intro = true)}
							customStyles='w-fit px-4 py-2.5 font-bold text-sm'
						/>
					</motion.div>
					<motion.div
						className='filtertabs-container'
						{...slideAnimation('up')}
					>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								isFilterTab
								isActiveTab={activeFilterTab[tab.name]}
								handleClick={() => handleActiveFilterTab(tab.name)}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
