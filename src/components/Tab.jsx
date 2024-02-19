import PropTypes from 'prop-types';

const Tab = ({ tab, isFilterTab, handleClick }) => { 
	return (
		<div
			key={tab.name}
			className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
    >
			<img 
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
	);
};

Tab.propTypes = {
	tab: PropTypes.any,
	isFilterTab: PropTypes.any, 
	handleClick: PropTypes.any,
};

export default Tab;
