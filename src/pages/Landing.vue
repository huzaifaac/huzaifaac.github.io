<template>
  <div>
    <div class="jumbotron jumbotron-fluid hero mb-0 ">
      <div class="guo-shape-divider-wrap " style="height:80px;" data-front="" data-style="tilt_alt" data-position="bottom">
        <svg class="guo-shape-divider" fill="#0c1154" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <polygon points="100 10 100 0 -4 10"></polygon>
        </svg>
      </div>
      <div class="content-center my-5">
        <div class="container padding-hero">
          <img src="img/landing_logo.png">
          <h1 class="" style="font-weight: 600;">Making Space Research Accessible to Everyone.</h1>
          <div class="row">
            <img  class="ilf-cube" src="img/sat.png" style="position: absolute; max-width: 20%; left: 10%; top: 25%; z-index: 4; transform: matrix(1, 0, 0, 1, 0, 0);">
          </div>
        </div>
      </div>        
    </div>
    <!-- <img src="img/wline-up.png" style="height: 150px; margin-top: -100px; width: 100%; opacity: 1.0;"> -->
    <div class="jumbotron vision mb-0 py-5" style="background-color: #0C1154; color: white;">
      <div class="container">
        <div class="row align-items-md-center">
          <div class="col-md-8 ml-auto mr-auto my-5 align-middle">
            <h2 class="title">GU Orbit Vision</h2>
            <h5>
              We are at the vanguard of a new era; entering a time of human colonization in space. Our generation will build the innovative technologies that will enable our exploration of the solar system. 
            </h5>
            <h5>
              GU Orbit is a student-led society with the mission of developing satellite technology which enables students and researchers to be a part of the growing space industry. Glasgow produces more satellites than any other city in Europe. We find it fitting that the University of Glasgow leads the way in student innovation of space.
            </h5>
          </div>
          <div class="col-md-4 ml-auto mr-auto px-auto align-middle">
            <img src="img/map.png">
          </div>
        </div>
      </div>
    </div>


    <div class="section section-about-us" style="background-color: black; color: white; z-index: 1:">
      <div class="guo-shape-divider-wrap " style="height:100px;" data-front="" data-style="tilt_alt" data-position="top">
        <svg class="guo-shape-divider" fill="#0c1154" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <polygon points="104 10 0 0 0 10"></polygon>
        </svg>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="title" style="text-align: center;">Cubesat Development</h2>
            <h5 style="text-align: center; color: white;">
              We are developing CubeSat’s to perform research and test new technologies. CubeSats are a cheap new way to launch into orbit.
            </h5>
          </div>
        </div>
        <div class="d-flex flex-wrap justify-content-md-around align-items-md-center">
          <div class="p-2 justify-content-center mx-auto 
            order-sm-1 order-md-1 order-lg-1 order-xl-1">
            <div class="d-flex" style="margin-bottom: 35px;">
              <img src="img/binoculars.png" style="width: 40px; height: 40px; margin-right: 15px;">           
              <p class="point">Earth Observation</p>
            </div>
            <div class="d-flex" style="margin-bottom: 35px;">
              <img src="img/start-up.png" style="width: 40px; height: 40px; margin-right: 15px;"> 
              <p class="point">Propulsion</p>
            </div>
            <div class="d-flex" style="margin-bottom: 35px;">
              <img src="img/pickaxe.png" style="width: 40px; height: 40px; margin-right: 15px;"> 
              <p class="point">Asteroid Mining</p>
            </div>
          </div>
          <div class="p-4 justify-content-center mx-auto align-self-center 
            order-sm-2 order-md-3 order-lg-2 order-xl-2">
            <img src="img/CubeSat.png">
          </div>
          <div class="p-2 justify-content-center mx-auto 
            order-sm-3 order-md-2 order-lg-3 order-xl-3 ">
            <div class="d-flex " style="margin-bottom: 35px; text-align: right;">
              <p class="point">Space Debris</p>
              <img src="img/trash.png" style="width: 40px; height: 40px; margin-left: 15px;"> 
            </div>
            <div class="d-flex " style="margin-bottom: 35px;">
              <p class="point">Biological</p>
              <img src="img/dna.png" style="width: 40px; height: 40px; margin-left: 15px;"> 
            </div>
            <div class="d-flex " style="margin-bottom: 35px;">
              <p class="point">Sensor Testbed</p>
              <img src="img/shopping-list.png" style="width: 40px; height: 40px; margin-left: 15px;"> 
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Become a part of our space mission.</h2>
        
        <div class="w-100 row mx-0">
        <div class="container py-5">
            <div class="row align-middle">
              <div class="col-md-8 align-self-center" style="position: relative;">
                <h5 class="text-center align-self-center" style="position: relative;"> If you have an idea on how to help to make our mission come to a reality, or want to contribute in any other way, get involved!</h5>
              </div>
              <div class="col-md-4 my-auto text-center">
                <router-link to="/contact">
                  <button class="btn btn-info btn-round btn-lg btn-block" type="submit">Get Involved!</button>
                </router-link>
              </div>
            </div>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
};
</script>
<style scoped>
  .jumbotron {
    position: relative;
    border-radius: 0px;
  }

  .jumbotron.hero{
    background-image: url("../../public/img/earth.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    text-align: center;
  }

  .guo-shape-divider-wrap[data-position="top"] {
    transform: rotate(180deg);
  }
  .guo-shape-divider-wrap[data-position="top"] {
    top: 0px;
    bottom: auto;
  }
  .guo-shape-divider-wrap:not([data-using-percent-val="true"]) .nectar-shape-divider {
    height: 33%;
  }
  .point {
    color: white;
    font-weight: bold;
    font-style: normal;
    font-size: 1rem;
    font-family: Montserrat;
    white-space: nowrap;
  }
  .landing-page .section-contact-us .input-group {
    padding: 0px !important;
  }
  .div.input-group {
    padding-right: 0px !important;
  }

  .ilf-cube{
    animation: floating 2.5s ease-in-out -2.2s infinite alternate;
    -webkit-animation: floating 2.5s ease-in-out -2.2s infinite alternate;
    -moz-animation: floating 2.5s ease-in-out -2.2s infinite alternate;
    -ms-animation: floating 2.5s ease-in-out -2.2s infinite alternate;
    -o-animation: floating 2.5s ease-in-out -2.2s infinite alternate;
  }
  @keyframes floating{
    from{transform: translateY(10px) rotate3d(0,0,1,-2deg);}
    to{transform: translateY(-10px) rotate3d(0,0,1,2deg);}
  }

  @-webkit-keyframes floating{
    from{transform: translateY(10px) rotate3d(0,0,1,2deg);}
    to{transform: translateY(-10px) rotate3d(0,0,1,-2deg);}
  }

</style>
