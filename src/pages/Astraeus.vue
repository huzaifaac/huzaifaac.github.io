<template>
  <div>
    <div class=" jumbotron jumbotron-fluid my-auto d-flex" style="background-image: url('img/backgrounds/boatwithsail.png'); background-position: bottom left; background-size:cover; height: 90vh; background-repeat: no-repeat; min-width: 100%;">
      <div class="container my-auto">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <h6 class="text-left text-light font-weight-bold">_ ASTRAEUS</h6>
            <h2 class="text-left text-light font-weight-bold">We cannot direct the wind, but we can adjust the sail</h2>
            <span  class="text-left text-light font-weight-bold lead" style="opacity: 0.8;">Floating high above us, Astraeus observes all, but this is not ordinary vessel for it carries an intelligence capable of deep learning. Our CubeSat will be a part of a new generation of intelligence sent up to space.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-5 py-5" >
        <div class="col-md-6">
          <h2 class="title text-center">MISSION BRIEF</h2>   
          <p class="text-justify">
            Floating high above us, Astraeus observes all, but this is not ordinary vessel for it carries an intelligence capable of deep learning. Our CubeSat will be a part of a new generation of intelligence sent up to space. By carrying a GPU it will be capable of performing advanced calculations on satellite footage. The data collected from Earth Observation will be used for digital elevation modeling, or in other words, creating a 3D map of Earth’s surface. We then have grand plans for implementing game development.
          </p>     
          
        </div>
        <div class="col-md-6 my-auto text-center">
          <img src="img/projects/astraeus.png">
        </div>
      </div>
      <div class="row my-5 py-5" >
        <div class="col-md-6">
          <p class="text-justify">
            We are building a 3U CubeSat, 10 x 10 x 30 cm in size. It will be carrying a variety of sensors so to orient it and communicate with it whilst traveling in Low Earth Orbit (LEO). Attached to a solar sail, it will be floating around earth for a few months, before the sail helps it enter into the atmosphere and eventually burn up to avoid cluttering space with more debris.
          </p>
        </div>
        <div class="col-md-6">
          <img src="img/sat.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { Card, Button, FormGroupInput } from '@/components';
//import MainFooter from '@/layout/MainFooter';
//import MainNavbar from '@/layout/MainNavbar';
export default {
  name: 'AstraeusPage',
  bodyClass: 'astraeus-page',
  components: {
    //Card,
    //MainFooter,
  }
};
</script>
