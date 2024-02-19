import { proxy } from "valtio";
import { camiseta_blanca, limpiar } from "../assets";

const state = proxy({
    intro: true,
    color: '#FFFFFF',
    tshirt: camiseta_blanca,
    clear: limpiar,
    title: 'Categorias',
    showSubCat: false,
    showProdList: false,
    isLogoTexture: true, 
    logoDecalBuffer: "",
    logoDecal: './832-daredevil(Daredevil).png',
    fullDecal: './threejs.png'
})

export default state;