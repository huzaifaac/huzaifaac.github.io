<template>
  <navbar
    position="navbar navbar-expand-lg mb-0 fixed-top"
    type="white"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
    style="background-image: linear-gradient(to right, rgb(24, 45, 102), rgb(76, 155, 176)!important;"
  >
    <a class="navbar-brand" href="#">
      <router-link v-popover:popover1 class="" to="/">
        <img src="img/newlogo.png" id="nav-logo">      
      </router-link>
    </a>
    <template slot="navbar-menu" slot-scope="{ toggle, isToggled }">
      <ul class="navbar-nav nav-tabs  p-0">
        <li class="nav-item my-auto"> 
          <router-link  v-popover:popover1 active class="nav-link" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item my-auto"> 
          <router-link  v-popover:popover1 active class="nav-link" to="/about">
            About
          </router-link>
        </li>
        <li class="nav-item my-auto">
          <router-link v-popover:popover1 class=" nav-link" to="/projects">
            Projects
          </router-link>
        </li>
        <li class="nav-item my-auto">
          <router-link v-popover:popover1 class=" nav-link" to="/sponsors">
            Sponsors
          </router-link>
        </li>
        <li class="nav-item my-auto">
          <router-link v-popover:popover1 class=" nav-link" to="/contact">
            Contact
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav nav-tabs p-0">
        <li class="nav-item my-auto">
          <a
            class="nav-link"
            rel="tooltip"
            title="Like us on Facebook"
            data-placement="bottom"
            href="https://www.facebook.com/GUOrbit/"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
            <p class="d-lg-none d-xl-none">Facebook</p>
          </a>
        </li>
        <li class="nav-item my-auto">
          <a
            class="nav-link"
            rel="tooltip"
            title="Follow us on Instagram"
            data-placement="bottom"
            href="https://www.instagram.com/gu.orbit/"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
            <p class="d-lg-none d-xl-none">Instagram</p>
          </a>
        </li>
        <li class="nav-item my-auto">
          <a
            class="nav-link"
            rel="tooltip"
            title="Connect with us on LinkedIn"
            data-placement="bottom"
            href="https://www.linkedin.com/company/gu-orbit/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
            <p class="d-lg-none d-xl-none">LinkedIn</p>
          </a>
        </li>
      </ul>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
  #nav-logo {
    height: 35px;
  }
  .dropdown-menu .dropdown-item {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .nav-tabs > .nav-item > .nav-link.active {
    background-color: #00317afa;
    border-radius: 30px;
    color: #FFFFFF;
  }
  .navbar .navbar-nav .nav-item.active .nav-link:not(.btn), .navbar .navbar-nav .nav-item .nav-link:not(.btn):focus, .navbar .navbar-nav .nav-item .nav-link:not(.btn):hover, .navbar .navbar-nav .nav-item .nav-link:not(.btn):active {
    background-color: rgba(0, 48, 120, 0.75);
    border-radius: 0.1875rem;
  }

  .navbar.bg-white:not(.navbar-transparent) a:not(.dropdown-item):not(.btn) {
    color: #f9f1f1;
  }
</style>
