<template>
  <card type="message" plain>
    <form action="https://send.pageclip.co/GJyS0eurYTwIXiEHzmFM9vmz8V3uZv4h/contact"  class="pageclip-form" method="post">
      <fg-input
      class="no-border input-lg"
      addon-left-icon="now-ui-icons users_circle-08"
      v-model="userName"
      placeholder="Your name"
      type="text"
      name="name"
      >
      </fg-input>

      <fg-input
      class="no-border input-lg"
      addon-left-icon="now-ui-icons ui-1_email-85"
      v-model="email"
      placeholder="Email address"
      type="email"
      name="email"
      >
      </fg-input>
      <textarea style="width: 100%; background-color: #eeeef0; border: medium none; border-radius: 20px; padding: 10px 10px 10px 55px; font-size: 0.8571em; min-height: 125px;"
      v-model="message"
      placeholder="Type a message"
      type="text"
      name="message"
      />

      <div class="card-footer text-center">
        <button
        style="color: white; background-color: #182C4C"
        class="btn btn-info btn-round btn-lg btn-block pageclip-form__submit"
        type="submit"
        @click.native="modals.classic = true"
        >
        Send Message
        </button>
      </div>
    </form>
  </card>
</template>

<script type="text/javascript">  
import { Card, Button, FormGroupInput, Modal } from '@/components';
export default {
  name: 'contactform',
  bodyClass: 'contactform-component',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Modal
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