<template>
  <div>
      <div class="section section-about-us mt-5">
        <div class="container my-5">
          <div class="row mx-auto my-5 align-middle">
            <div class="col-sm-6 mx-auto my-5">
              <h1 class="title">Our Story</h1>
              <h5> In April 2019, a group of students at the University of Glasgow came up with a common goal: building a satellite and send it up to space. A month later, GU Orbit was formed, kicking off <span class="font-weight-bold">Scotland’s first student-led CubeSat project</span>.</h5>
            </div>
            <div class="col-sm-6 mx-auto my-auto text-center">
              <img class="center mx-auto" src="img/astronaut.png">
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="section section-about-us" style="z-index: 10; position: relative; top: 0; padding-bottom: 40px; background-size: 100% 100%; width: 100%">
          <div class="row-bg-wrap" data-bg-animation="none">
            <div class="row-bg-overlay" style="background-color: #0c1154; background: linear-gradient(90deg,#0c1154 0%,#63cdd1 100%);  opacity: 1; ">
              
            </div>
          </div>
          <div class="guo-shape-divider-wrap no-color " style="height:150px;" data-front="" data-style="waves_opacity_alt" data-position="top">
            <svg class="guo-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">  
              <path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path> 
              <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path> 
              <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
            </svg>
          </div>
          <div class="guo-shape-divider-wrap color" style="height:150px;" data-front="" data-style="curve_opacity" data-position="bottom">
            <svg class="guo-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> 
              <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path> 
              <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path> 
              <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path> 
            </svg>
          </div>
          <div class="container">
            <members/>  
          </div>
        </div>  
      </div>
      <div class="row" style="background-color: #0c1154;position: relative;">
        <div class="container">
          <div class="guo-shape-divider-wrap " style="height:300px;" data-front="" data-style="tilt_alt" data-position="bottom">
            <svg class="guo-shape-divider" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"> 
              <polygon points="100 10 100 0 -4 10"></polygon> 
            </svg>
          </div>
            <div class="pb-5">
              <h1 class="title text-center" style="color:white;">Our Values</h1>
              <h5 class="col-md-8 mx-auto text-center" style="color: white;">We are guided by our values and continously aim to make a dent in the space industry by designing, building, and testing projects which push the boundaries of space technology.</h5>
            </div>
            <div class="row justify-content-around align-middle mx-2">
              <div class="col-md-3">
                <div class="text-center">
                  <img src="img/tools.png" class="pb-3">  
                  <h3 class="mb-3" style=" color: white;">Research</h3>  
                </div>
                <h5 class="text-justify" style="color: white;">Working together with researchers and industry partnerships to  push the boundaries of space technology.</h5>
              </div>
              <div class="col-md-3">
                <div class="text-center">
                  <img src="img/writing.png" class="pb-3">  
                  <h3 class="mb-3" style="color: white;">Education</h3>
                </div>
                <h5 class="text-justify" style="color: white;">We are equipping students with real world, transferable skills to prepare a new generation of aerospace engineers.</h5>
              </div>
              <div class="col-md-3">
                <div class="text-center">
                  <img src="img/electron.png" class="pb-3">  
                  <h3 class="mb-3" style="color: white;">Community</h3>  
                </div>
                <h5 class="text-justify" style="color: white;">The team fosters a fun and supportive environment which creates tighter bonds and supports a lifetime membership.</h5>            
              </div>
            </div>
            <div class="row mt-5 mx-2 d-flex justify-content-center" style="position:relative; z-index: 10;">
              <div class="card col-md-8 p-md-5 p-sm-3" style="background-color: #f4f4f7;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 10px;">
                <div class="content">
                    <div>
                      <h1 style="color: #182C4C;">Contact Us</h1>
                      <h5 style="color: #8898A9;">Or send an email directly to uog.orbit@gmail.com</h5>
                      <contactform/>
                    </div>
                </div>
              </div>
            </div>     
        </div>
      </div>
      <div class="row">
        <!-- Insert some content here -->
      </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainNavbar from '@/layout/MainNavbar';
import Member from '../components/Member.vue';
import MEMBERS from '../../data/Members.json';
import Members from '../components/Members.vue';
import LEADERS from '../../data/Leaders.json';
import Contactform from '../components/ContactForm.vue';
export default {
  name: 'about',
  bodyClass: 'about-page',
  components: {
    Card,
    MainNavbar,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Members,
    Contactform
  },
  currentMembers: MEMBERS,
  teamLeaders: LEADERS,
  data() {
    return {
      allMembers: false,
      userName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    showAll() {
      this.allMembers = true;
    }
  },
};
</script>
<style scoped>
  .navbar.navbar-transparent {
    background-color: black !important;
  }
  .btn-lg {
    text-align: center;
  }
  ::placeholder {
    color: #434343;
  }

  .row-bg-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .row-bg-wrap .row-bg-overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: ' ';
    z-index: auto;
    backface-visibility: hidden;
  }

  .guo-shape-divider-wrap {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 150px;
    z-index: 3;
    transform: translateZ(0);
  }
  .guo-shape-divider {
    width: 100%;
    left: 0;
    bottom: -1px;
    height: 100%;
    position: absolute;
    z-index: auto;
  }
  .guo-shape-divider-wrap.color .guo-shape-divider {
    fill: #0c1254;
  }
  .guo-shape-divider-wrap.no-color .guo-shape-divider {
    fill: #fff;
  }

  .guo-shape-divider-wrap[data-style="curve_opacity"] svg path:nth-child(2), .guo-shape-divider-wrap[data-style="waves_opacity_alt"] svg path:nth-child(2) {
    opacity: 0.3;
  }
  .guo-shape-divider-wrap[data-style="curve_opacity"] svg path:nth-child(1), .guo-shape-divider-wrap[data-style="waves_opacity_alt"] svg path:nth-child(1) {
    opacity: 0.15;
  }

  .guo-shape-divider-wrap[data-position="top"] {
    top: -1px;
    bottom: auto;
  }
  .guo-shape-divider-wrap[data-position="top"] {
    transform: rotate(180deg);
  }
  
</style>
