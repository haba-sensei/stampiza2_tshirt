import { proxy } from "valtio";

const state = proxy({
    intro: false,
    color: '#4A4A4A',
    isLogoTexture: true, 
    logoDecal: './832-daredevil(Daredevil).png',
    fullDecal: './threejs.png'
})

export default state;