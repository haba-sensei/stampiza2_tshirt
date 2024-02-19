import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton, Tab } from '../components';
import { camiseta_blanca, camiseta_negra } from '../assets';
import ImagePicker from '../components/ImagePicker';
import Title from '../components/Title';

const Customizer = () => {
	const snap = useSnapshot(state);
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true,
	});

	const FilterTabs = [
		{
			name: 'changeColor',
			icon: state.tshirt,
		},
		{
			name: 'clearLogo',
			icon: state.clear,
		},
	];

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
				state.tshirt = state.color === '#4A4A4A' ? camiseta_blanca : camiseta_negra;
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
							<div className='filepicker-container'>
								<div className='flex flex-col flex-1'>
									<Title name={snap.title} />
									<ImagePicker />
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className='absolute z-10 top-5 right-5'
						{...fadeAnimation}
					>
						<CustomButton
							type='filled'
							title='Inicio'
							handleClick={() => (state.intro = true)}
							customStyles='w-fit px-4 py-2.5  text-sm font-semibold tracking-wider'
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
