import { proxy } from 'valtio';
const state = proxy({
  // we can think of this as react context. Whatever we define in here we will be able to use in a whole app. That is that simple.
  // We will use it to setup our state.

  intro: true, // are we currently on a homepage or not
  color: '#EFBD48', // our default color
  isLogoTexture: true, // are we currently displaying logo on a shirt?
  isFullTexture: false, // are we currenty; displaying full texture on a shirt?
  logoDecal: './threejs.png', // our initial default logo displayed on the shirt
  fullDecal: './threejs.png', // our initial default full shirt texture decal displayed on the shirt
});
export default state;
