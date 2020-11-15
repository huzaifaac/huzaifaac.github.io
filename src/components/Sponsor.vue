<template>
  <div class="sponsor text-center my-3">
        <a
          target="_blank"
          :href="website"
          class="nav-link"
          rel="tooltip">
          <img 
            :id="id"
            :src="logoFile"
            class="img-fluid mx-auto my-auto align-middle" 
            style="max-height: 250px;">
        </a>
  </div>
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
      site: {
        type: String
      },
      logo: {
        type: String,
      }
    },
    computed: {
      logoFile() {
        return 'img/sponsors/'+this.logo+'_logo.png';
      },
      website() {
        if (this.site == "") {
          return "https://www.google.com/search?q="+this.name;
        } else {
          return this.site;
        }
      }
    }
  }
</script>