import { useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react';
import { loadingLottie } from '../assets';
import UseAxios from '../hooks/useAxios';
import ProductList from './ProductList';
import state from '../store';
import CustomButton from './CustomButton';

const SubCategories = ({ handleClearSubCategories, categoriaId }) => {
	const {
		data: subcategorias,
		error: errorSubCategorias,
		loading: loadingSubCategorias,
	} = UseAxios(`/subcategorias/buscar/${categoriaId}`);
	const [selectedSubCategoriaId, setSelectedSubCategoriaId] = useState(null);

	const handleShowProducts = (subCategoriaId) => {
		state.title = 'Imagenes';
		setSelectedSubCategoriaId(subCategoriaId);
	};

	const handleClearProducList = () => {
		state.title = 'Sub Categorias';
		setSelectedSubCategoriaId(null);
	};

	return (
		<div>
			<div>
				{loadingSubCategorias ? (
					<div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
						<Lottie
							animationData={loadingLottie}
							loop={true}
						/>
					</div>
				) : errorSubCategorias ? (
					<p>Error: {errorSubCategorias.message}</p>
				) : selectedSubCategoriaId ? (
					<ProductList
						handleClearProducList={handleClearProducList}
						subCategoriaId={selectedSubCategoriaId}
					/>
				) : (
					<div>
						{subcategorias && subcategorias.docs && subcategorias.docs.length > 0 ? (
							subcategorias.docs.map((subcategoria, index) => (
								<div
									key={index}
									className='text-center cursor-pointer'
									onClick={() => handleShowProducts(subcategoria._id)}
								>
									<img
										src={subcategoria.imagen}
										alt={`Imagen ${subcategoria.nombre}`}
										loading='lazy'
									/>
									<span className='text-white capitalize'>{subcategoria.nombre}</span>
								</div>
							))
						) : (
							<p className='font-semibold tracking-wider'>No hay sub categorias disponibles</p>
						)}
					</div>
				)}
			</div>
			{!selectedSubCategoriaId && (
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
						title='Regresar a las Categorias'
						handleClick={handleClearSubCategories}
						customStyles='text-xs font-semibold tracking-wider'
					/>
				</div>
			)}
		</div>
	);
};

SubCategories.propTypes = {
	handleClearSubCategories: PropTypes.func.isRequired,
	categoriaId: PropTypes.string.isRequired,
};

export default SubCategories;
