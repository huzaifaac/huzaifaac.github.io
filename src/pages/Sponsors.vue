<template>
  <div style="width: 100%;">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/stars.png')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">SPONSORS</h1>
          <h3>MAKING OUR MISSIONS POSSIBLE</h3>
        </div>
      </div>        
    </div>
    <div>
      <div class="w-100 row mx-0" style="background-image: linear-gradient(to right, #182d66 , #182d66);">
        <div class="container py-5">
            <div class="row ">
              <div class="col-md-8">
                <h3 class="title py-0 my-0" style="color: white;">GET INVOLVED</h3>
                <h5 class="subtitle" style="color: white;"> Join us in on of the most exciting student-led project in Scotland!</h5>
              </div>
              <div class="col-md-4 my-auto text-center">
                <router-link to="/contact">
                  <button class="btn btn-info btn-round btn-lg" type="submit">Get Involved!</button>
                </router-link>
              </div>
            </div>
        </div>
      </div>
      <div class="container mt-5">
        <div v-for="sponsor_group in $options.sponsors">
          <div class="row">
            <div class="col-md-2"></div>
            <h1 class="col-md-8" style="text-align: center;">{{ sponsor_group.group_title }}</h1> 
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div v-for="sponsor in sponsor_group.sponsors" class="col-md-6 my-auto">
              <sponsor :id="sponsor.id" :name="sponsor.name" :site="sponsor.site" :logo="sponsor.logo"></sponsor>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>   
</template>

<script type="text/javascript">  
import SPONSORS from '../../data/Sponsors.json';
import Sponsor from '../components/Sponsor.vue';
export default {
  name: 'sponsors',
  bodyClass: 'sponsors-page',
  sponsors: SPONSORS,
  components: {
    Sponsor
  }
};
</script>
