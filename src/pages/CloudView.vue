<template>
  <div>
    <div class=" jumbotron jumbotron-fluid my-auto d-flex" style="background-image: url('img/backgrounds/clouds.png'); background-position: right center; background-size:cover; height: 90vh; background-repeat: no-repeat; min-width: 100%;">
      <div class="container my-auto">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <h6 class="text-left text-light font-weight-bold">_ CLOUD VIEW</h6>
            <h2 class="text-left text-light font-weight-bold">Behind every cloud is another cloud</h2>
            <span  class="text-left text-light font-weight-bold lead" style="opacity: 0.8;">Shoot for the moon. Even if you miss it you will land among the stars." —Les Brown</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-5 py-5" >
        <div class="col-md-6">
          <h2 class="title text-center">MISSION BRIEF</h2>   
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>     
          
        </div>
        <div class="col-md-6 my-auto text-center">
          <img src="img/projects/cloudview.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
import MainNavbar from '@/layout/MainNavbar';
export default {
  name: 'cloudview',
  bodyClass: 'cloudview',
  components: {
    Card,
    MainFooter,
    MainNavbar
  }
};
</script>
<style></style>
