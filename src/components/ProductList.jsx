import UseAxios from '../hooks/useAxios';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import { loadingLottie } from '../assets';
import { BaseUrl } from '../config/constants';
import state from '../store';
import CustomButton from './CustomButton';

const ProductList = ({ handleClearProducList, subCategoriaId }) => {
	const {
		data: products,
		error: errorProduct,
		loading: loadingProduct,
	} = UseAxios(`/imagenes/buscar/${subCategoriaId}`);

	const readFile = (image) => {
		state.logoDecal = image;
	};

	return (
		<div>
			{loadingProduct ? (
				<div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
					<Lottie
						animationData={loadingLottie}
						loop={true}
					/>
				</div>
			) : errorProduct ? (
				<p>Error: {errorProduct.message}</p>
			) : products && products.docs && products.docs.length > 0 ? (
				<div className='grid grid-cols-2 grid-rows-2 gap-5'>
					{products.docs.map((product, index) => (
						<div
							key={index}
							className='text-center cursor-pointer'
						>
							<img
								src={`${BaseUrl.image}${product.url}${BaseUrl.media}`}
								alt={`Imagen ${product.nombre}`}
								onClick={() => readFile(`${BaseUrl.image}${product.url}${BaseUrl.media}`)}
								loading='lazy'
							/>
						</div>
					))}
				</div>
			) : (
				<p>No hay diseños disponibles</p>
			)}
			<div
				style={{
					flex: '15%',
					position: 'absolute',
					bottom: '40px',
					left: '0',
					right: '0',
					margin: '0 auto',
					width: 'fit-content',
				}}
			>
				<CustomButton
					type='filled'
					title='Regresar a las Sub Categorias'
					handleClick={handleClearProducList}
					customStyles='text-xs font-semibold tracking-wider'
				/>
			</div>
		</div>
	);
};

ProductList.propTypes = {
	handleClearProducList: PropTypes.func.isRequired,
	subCategoriaId: PropTypes.string.isRequired,
};

export default ProductList;
