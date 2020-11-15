<template>
  <div>
    <div class=" jumbotron jumbotron-fluid my-auto d-flex" style="background-image: url('img/backgrounds/clouds.png'); background-size: 100% 100%; height: 90vh; background-repeat: no-repeat; min-width: 100%;">
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
    <div class="row" style="min-height: 500px;">
      <div class="col-md-6">
        <h2 style="text-align: center;">MISSION BRIEF</h2>        
        <img src="img/rocketwithgpu.png">
      </div>
      <div class="col-md-6">
        Floating high above us,
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
