import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Drawer = ({ isOpen, onClose, children }) => {
	const handleOverlayClick = () => {
		if (onClose) {
			onClose();
		}
	};
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					exit={{ x: '100%' }}
					transition={{ ease: 'easeOut', duration: 0.3 }}
					className='fixed top-0 bottom-0 right-0 z-50 bg-white'
					style={{
						width: '100%',
						maxWidth: '320px', // Ancho máximo en dispositivos móviles
						margin: '0 auto', // Centrar en dispositivos móviles
						boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra
					}}
				>
					<div
						onClick={handleOverlayClick}
						className='fixed top-0 bottom-0 left-0 right-0 z-40 bg-black opacity-50'
					></div>
					<div className='z-50 p-4'>{children}</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

Drawer.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.bool,
	children: PropTypes.any,
};

export default Drawer;
