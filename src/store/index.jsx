import { proxy } from "valtio";
import { camiseta_blanca, limpiar, buscar, agregar, talla} from "../assets";

const state = proxy({
    intro: true,
    color: '#FFFFFF',
    tshirt: camiseta_blanca,
    clear: limpiar,
    buscar: buscar,
    agregar: agregar,
    talla: talla,
    title: 'Categorias',
    showCat: false,
    isLogoTexture: true, 
    logoDecalBuffer: "",
    logoDecal: './832-daredevil(Daredevil).png',
    fullDecal: './threejs.png'
})

export default state;