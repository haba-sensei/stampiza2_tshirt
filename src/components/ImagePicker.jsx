import { useState } from 'react';
import SubCategories from './SubCategories';
import UseAxios from '../hooks/useAxios';
import Lottie from 'lottie-react';
import { loadingLottie } from '../assets';
import state from '../store';

const ImagePicker = () => {
	const {
		data: categorias,
		error: errorCategorias,
		loading: loadingCategorias,
	} = UseAxios('/categorias/listar');
	const [selectedCategoriaId, setSelectedCategoriaId] = useState(null);

	const handleCategoriaClick = (id) => {
		state.title = 'Sub Categorias';
		setSelectedCategoriaId(id);
	};

	const handleClearSubCategories = () => {
		state.title = 'Categorias';
		setSelectedCategoriaId(null);
	};

	return (
		<div>
			<div className='grid grid-cols-2 grid-rows-2 gap-5'>
				{loadingCategorias ? (
					<div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
						<Lottie
							animationData={loadingLottie}
							loop={true}
						/>
					</div>
				) : errorCategorias ? (
					<p className='font-semibold tracking-wider text-white'>
						Error: {errorCategorias.message}
					</p>
				) : selectedCategoriaId ? (
					<SubCategories
						handleClearSubCategories={handleClearSubCategories}
						categoriaId={selectedCategoriaId}
					/>
				) : categorias && categorias.length > 0 ? (
					categorias.map((categoria, index) => (
						<div
							key={index}
							className='text-center cursor-pointer'
							onClick={() => handleCategoriaClick(categoria._id)}
						>
							<img
								src={categoria.imagen}
								alt={`Imagen ${categoria.nombre}`}
								loading='lazy'
							/>
							<span className='text-white capitalize'>{categoria.nombre}</span>
						</div>
					))
				) : (
					<p className='font-semibold tracking-wider'>No hay categorias disponibles.</p>
				)}
			</div>
		</div>
	);
};

export default ImagePicker;
