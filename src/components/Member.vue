<template>
  <div class="member">
    <script type="application/javascript" src="https://use.fontawesome.com/a8f443bf5c.js"></script>
      
      <div class="content" style="width: 100%; height: auto;">
        <div class="content-overlay rounded"></div>
        <img :src="imgFile" class="rounded content-image" >
        <div class="content-details fadeIn-bottom vertical-center justify-content-center align-self-center">
          <p class="h4 mt-2">{{name}}</p>
          <p class="">{{role}}</p>
          <a
            v-if="showLinkedin"
            rel="tooltip"
            :title="message"
            data-placement="bottom"
            :href="linkedin"
            target="_blank"
            style="color: #0077B5 !important;">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      name: {
        type: String,
        default: false
      },
      role: {
        type: String,
        default: "Member"
      },
      photo: {
        type: String,
        default: "default_avatar"
      },
      linkedin: {
        type: String,
        default: "undefined"
      }
    },
    computed: {
      message() {
        return "Connect with " + this.name + " on LinkedIn";
      },
      showLinkedin() {
        return (this.linkedin == "undefined") ? false : true;
      },
      imgFile() {
        return "img/members/" + this.photo + ".jpg";
      }
    }
  }
</script>

<style type="text/css">
  .content {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: auto;
    overflow: hidden;
  }
  .content .content-overlay {
    overflow: hidden;
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .content-details {
    color:white;
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    margin: auto;
    height: 100%;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -moz-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }
  .fadeIn-bottom{
    top: 80%;
  }

  .content:hover .content-overlay{
    opacity: 1;
  }
  .content:hover .content-details{
    top: 50%;
    left:50%;
    opacity: 1;
  }

  .member {
    text-align: center;
    max-width: 100%;
  }
  .fa{
    font-size:22px!important;
    color: white;
  }
  .fa:hover{
    color: rgb(0, 119, 181);
  }
  p {
    margin: 0;
    padding: 0;
    width: 150px;
    text-align: center;
  }
</style>