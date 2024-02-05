import { proxy } from 'valtio'


// allow to use state accross the whole application
const state = proxy({
    intro: true, // are we on the home page or not ? 
    color: '#EFBD48',
    isLogoTexture: true, 
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;