import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    // component by frame motion to allow us to enable animation of components that were removed form the tree
    <AnimatePresence>
      {/* we want to see if we are on the home page */}
      {snap.intro && (
        // if we are on home we will render it in motion.section - section with animation. Animation we will provide in an object as a spread.
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            {/* we will have a header with animation - that is why motion.header */}
            <img
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              {/* br in this place will be visible only on big devices */}
              <h1 className='head-text uppercase '>
                Let's <br className='xl:block hidden' /> do it.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create your unique and exclusive shirt with our brand new 3D
                customization tool. <strong>Unleash your imagination</strong>{' '}
                and define your own style.
              </p>
              {/* we will now create a custom button that will lead us out from home page to customization page */}
              <CustomButton
                type='filled'
                title='Customize It'
                // we will change the state with a click to tell that it is not a home page so we will display customization page.
                handleClick={() => {
                  state.intro = false;
                }}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
