<template>
  <div>
    <div>
      <div class="section section-about-us">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-5 my-auto" v-if="!messageSent">
              <h2 class="title">WANT TO GET INVOLVED?</h2>
              <h5 style="max-width: 350px;"> Please contact us through the form, or email us at uog.orbit@gmail.com</h5>
              <img src="img/text-logo.png" style="max-width: 80%;">
            </div>
            <div v-else class="col-md-5">  
              <h2 class="title">We are processing your message...</h2>            
            </div>
            <div class="col-md-6">
              <div class="card" style="background-color: #f4f4f7;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 10px; padding: 15px 15px 15px 15px;">
                <div class="content">
                  <div class="container">
                    <div>
                      <h1 style="color: #182C4C;">Contact Us</h1>
                      <contactform/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <modal :show.sync="modals.classic" headerClasses="justify-content-center">
              <h4 slot="header" class="title title-up">We are processing your message ...</h4>
              <template slot="footer">
                <n-button type="danger" @click.native="modals.classic = false">Close</n-button>
              </template>
            </modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Modal } from '@/components';
import MainNavbar from '@/layout/MainNavbar';
import Contactform from '../components/ContactForm.vue';
export default {
  name: 'contact',
  bodyClass: 'contact-page',
  components: {
    Card,
    MainNavbar,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Modal,
    Contactform,
  },
  data() {
    return {
      userName: "",
      email: "",
      message: "",
      messageSent: false,
      one: true,
      modals: {
        classic: false
      }
    };
  },
  methods: {
    processMessage() {
      this.messageSent = true;
    }
  }
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
</style>
