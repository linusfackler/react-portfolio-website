import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import particlesConfig from './config/particlesConfig'


function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}

      options={particlesConfig}
    />
  )
}