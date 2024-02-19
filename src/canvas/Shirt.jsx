/* eslint-disable react/no-unknown-property */
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';
import { useEffect, useState } from 'react';

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb');
    const [base64Url, setBase64Url] = useState(snap.logoDecal);

    useEffect(() => {
        const fetchImageAsBase64 = async () => {
            try {
                const response = await fetch(snap.logoDecal);
                const blob = await response.blob();
                const base64 = await convertBlobToBase64(blob);
                setBase64Url(base64);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImageAsBase64();
    }, [snap.logoDecal]);

    const logoTexture = useTexture(base64Url);

    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    });

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                roughness={1}
                dispose={null}
            >
                <Decal
                    position={[0, 0.04, 0.19]}
                    rotation={[0, 0, 0]}
                    scale={0.25}
                    map={logoTexture}
                    anisotropy={16}
                    depthTest={false}
                    depthWrite={true}
                />
            </mesh>
        </group>
    );
};

// Función para convertir un Blob a base64
const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });
};

export default Shirt;
