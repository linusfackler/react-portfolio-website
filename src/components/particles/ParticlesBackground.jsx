import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "react-tsparticles";
import { loadPolygonPath } from "tsparticles-path-polygon"

let particlesConfig = {
  particles: {
    color: {
      value: "#FF0000",
      animation: {
        enable: true,
        speed: 10
      }
    },
    move: {
      attract: {
        enable: true,
        rotate: {
          distance: 100,
          x: 2000,
          y: 2000
        }
      },
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy"
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0
        },
        generator: "polygonPathGenerator",
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30
        }
      },
      random: false,
      speed: 3,
      straight: false,
      trail: {
        fillColor: "#000",
        length: 20,
        enable: true
      }
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 0
    },
    opacity: {
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 2
    }
  },
  background: {
    color: "#000"
  },
  fullScreen: {
    zIndex: -1
  },
  emitters: {
    direction: "none",
    rate: {
      quantity: 1,
      delay: 0.25
    },
    size: {
      width: 0,
      height: 0
    },
    position: {
      x: 50,
      y: 50
    }
  }
};

let onParticlesLoaded = (event) => {
  const particlesContainer = event.detail.particles;

  // you can use particlesContainer to call all the Container class
  // (from the core library) methods like play, pause, refresh, start, stop
};

let particlesInit = async (engine) => {
  // you can use main to customize the tsParticles instance adding presets or custom shapes
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(engine);
  await loadPolygonPath(engine);
};

const ParticlesBackground = () => {
  return (
      <Particles
  id="tsparticles"
  options={particlesConfig}
  particlesLoaded={onParticlesLoaded}
  particlesInit={particlesInit}
/>
  )
}

export default ParticlesBackground