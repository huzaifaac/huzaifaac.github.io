<template>
  <!-- Footer -->
<footer class="page-footer font-small " style="margin-top:150px; position: relative;">
  <!-- Wavy Separator-->
  <div class="guo-shape-divider-wrap " data-front="" data-style="mountains" data-position="bottom">
    <svg class="guo-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">  
      <path d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z"></path>
      <path d="M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z"></path>  
      <path d="M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z"></path>  
      <path d="M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z"></path>  
      <path d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z"></path> 
      <linearGradient id="cool-wavy-gradient">
        <stop offset="0%" stop-color="#182d66" />
        <stop offset="100%" stop-color="#4c9bb0" />
      </linearGradient>
    </svg>
  </div>
  <!-- Wavy Separator-->
  <!-- Footer Links -->
  <div class="container-fluid text-center text-md-left pt-5 px-5" style=" color: white; background-image: linear-gradient(to right, #182d66 , #4c9bb0);">

    <div class="row">

      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-6 mb-md-0 mb-3 mx-auto text-center">
        <h5 class="text-uppercase" style="font-weight: 600;">Legality</h5>

        <ul class="list-unstyled">
          <li>
            <a href="/privacypolicy">Privacy Policy</a>
          </li>
          <li>
            <a href="#!">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-6 mb-md-0 mb-3 align-center text-center">

        <!-- Links -->
        <h5 class="text-uppercase" style="font-weight: 600;">Contact</h5>

        <ul class="list-unstyled align-self-center">
          <li>
            <a href="/sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/contact">Get In Touch</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->
    </div>
    <div class="w-50 mx-auto row">
      <div class="my-4 flex-center mx-auto ">
        <a class="icon-social fb-ic " href="https://www.facebook.com/GUOrbit/">
          <i class="fab fa-facebook-f fa-lg white-text mx-md-5 mr-3 fa-2x"> </i>
        </a>
        <a class="icon-social li-ic" href="https://www.linkedin.com/company/gu-orbit/">
          <i class="fab fa-linkedin-in fa-lg white-text mx-md-5 mx-3 fa-2x"> </i>
        </a>
        <a class="icon-social ins-ic" href="https://www.instagram.com/gu.orbit/">
          <i class="fab fa-instagram fa-lg white-text mx-md-5 mx-3 fa-2x"> </i>
        </a>
      </div>
    </div>

  </div>

  <div class="footer-copyright text-center py-3" style="background-image: linear-gradient(to right, #182d66 , #4c9bb0); opacity: 0.9;"> 
      <div class="row justify-content-between">
        <div class="col-md-6 centeraligned">
          <span style="color:white;">GU Orbit © {{ year }}</span>
        </div>
        <div class="col-md-6 centeraligned">
          <a href="#!">University Avenue, Hillhead, Glasgow, GLG G12 8QQ</a>  
        </div>
      </div>
    
  </div>

</footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style type="text/css" scoped>
  .icon-social > i{
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.6em;

  }

  .icon-social > i:hover{
    box-shadow: 0px 0px 5px #f96332;
    transition: box-shadow 0.1s;
  }

  a, .footer-submenus{
    color:#b9b9b9;
    font-weight: 600;
  }
  .guo-shape-divider-wrap {
    position: absolute;
    top: -150px;
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    height: 150px;
    z-index: 3;
    transform: translateZ(0);
  }
  path{
    fill:url(#cool-wavy-gradient);
  }
  .guo-shape-divider-wrap[data-style="mountains"] svg path:first-child {
    opacity: 0.1;
  }
  .guo-shape-divider-wrap[data-style="mountains"] svg path:nth-child(2) {
    opacity: 0.12;
  }
  .guo-shape-divider-wrap[data-style="mountains"] svg path:nth-child(3) {
    opacity: 0.18;
  }
  .guo-shape-divider-wrap[data-style="mountains"] svg path:nth-child(4) {
    opacity: 0.33;
  }
</style>