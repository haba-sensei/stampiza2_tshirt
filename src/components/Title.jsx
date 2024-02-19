import PropTypes from 'prop-types';

const Title = ({ name }) => {
  return (
    <h1 className='pb-4 text-2xl text-white capitalize'> 
        {name}
    </h1>
  )
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Title