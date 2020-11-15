<template>
  <!--<div class="py-5 d-flex mx-2" style="width: 100%;">    
    <div class="col-md-3 text-center">
      <router-link v-popover:popover1 class="hovereffect" :to="page">
        <img 
          :id="id"
          :src="logoFile"
          class="img-fluid "
          style="max-width: 100%;">
      </router-link>
    </div> 
    <div class="col-md-8  justify-content-center mx-auto">
      <h2></h2>
      <span class="h5"></span>
    </div>
  </div>-->

  <router-link v-popover:popover1 class=" card my-4 mx-2" style="overflow: hidden;" :to="page">
    <div class="hovereffect row">
      <div class="col-md-4" style="overflow-y: hidden; overflow-x: hidden; background-color: #f9f9f9;">
        <img 
          :id="id"
          :src="logoFile"
          class="img-fluid "
          preserveAspectRatio="xMidYMid slice"
          style="max-width: 100%;"
          role="img"></img>

      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h1 class="card-title">{{name}}</h1>
          <span class=" h5 card-text text-left">{{description}}</span>
        </div>
      </div>
    </div>
  </router-link >  
</template>

<script type="text/javascript">
  export default {
    props: {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      description: {
        typr: String,
      },
      site: {
        type: String,
      },
      logo: {
        type: String,
      }
    },
    computed: {
      logoFile() {
        return 'img/projects/'+this.logo+'.png';
      },
      page() {
        return "/" + this.site;
      }
    }
  }
</script>
<style scoped type="text/css">
  a {
    color: initial;
  }
  a:hover, a:focus {
    color: initial;
    text-decoration: initial;
  }
  .hovereffect img{
    width:100%;
    height:100%;
    float:left;
    overflow:hidden;
    position:relative;
    cursor:default;
  }


  .hovereffect  img {
    overflow:hidden;
    display:block;
    position:relative;
    -webkit-transition:all .2s ease-out;
    transition:all .2s ease-out;
    transform: scale(0.9);
  }

  .hovereffect:hover img{
    overflow:hidden;
    -ms-transform:scale(1);
    -webkit-transform:scale(1);
    transform:scale(1);
  }
</style>