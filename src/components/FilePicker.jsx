import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

const FilePicker = ({ readFile }) => {
	const [images, setImages] = useState([]);

    useEffect(() => {
        const listImages = async () => {
            // const storageRef = ref(storage);  
            try {
                // const result = await listAll(storageRef);
                // console.log(result.items);
                // const urlPromises = result.items.map((imageRef) =>  
                //     getDownloadURL(imageRef) 
                // );
                const uris = [
                    "https://firebasestorage.googleapis.com/v0/b/stampiza2.appspot.com/o/477-the_potato_face(The%20Potato%20Face).png?alt=media&token=2bc0e935-9497-40f2-a7e8-ad698a22eb63"
                ];
                const urls = await Promise.all(uris);
                const base64Promises = urls.map(url => fetch(url)
                    .then(response => response.blob())
                    .then(blob => new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.onerror = reject;
                        reader.readAsDataURL(blob);
                    }))
                );

                const base64Images = await Promise.all(base64Promises);
                setImages(base64Images);
            } catch (error) {
                console.error("Error al listar las imágenes: ", error);
            }
        };

        listImages();
    }, []);
	
	return (
		<div className='filepicker-container'>
			<div className='flex flex-col flex-1'>
				<div className='grid grid-cols-4 grid-rows-2 gap-5'>
					{images.map((image, index) => (
                        <div key={index} className='cursor-pointer'>
                            <img
                                src={image}
                                alt={`Imagen ${index}`}
                                onClick={() => readFile(image)}
                                loading='lazy'
                            />
                        </div>
                    ))} 
				</div>
			</div>

			<div className='flex flex-wrap gap-3 mt-4'>
				<CustomButton
					type='outline'
					title='Logo'
					handleClick={() => {
						readFile('./673-arana_negra(Araña Negra).png');
					}}
					customStyles='text-xs'
				/>
				<CustomButton
					type='filled'
					title='Clear'
					handleClick={() => readFile('clear')}
					customStyles='text-xs'
				/>
			</div>
		</div>
	);
};

FilePicker.propTypes = {
	file: PropTypes.any,
	setFile: PropTypes.any,
	readFile: PropTypes.any,
};

export default FilePicker;
