import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import About from './pages/About.vue';
import Astraeus from './pages/Astraeus.vue'
import CloudView from './pages/CloudView.vue';;
import Ukseds from './pages/Ukseds.vue';
import Contact from './pages/Contact.vue';
import Sponsors from './pages/Sponsors.vue';
import Projects from './pages/Projects.vue';
import PrivacyPolicy from './pages/PrivacyPolicy.vue';
import TermsAndConditions from './pages/TermsAndConditions.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import WavyFooter from './layout/WavyFooter.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Landing, header: MainNavbar, footer: WavyFooter },
      props: {
        header: { colorOnScroll: 800 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: WavyFooter },
      props: {
        header: { colorOnScroll: 800 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/astraeus',
      name: 'astraeus',
      components: { default: Astraeus, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/ukseds',
      name: 'ukseds',
      components: { default: Ukseds, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: Contact, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/cloudview',
      name: 'cloudview',
      components: { default: CloudView, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      components: { default: Sponsors, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/projects',
      name: 'projects',
      components: { default: Projects, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      components: { default: PrivacyPolicy, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
    },
    {
      path: '/tandc',
      name: 'tandc',
      components: { default: TermsAndConditions, header: MainNavbar, footer: WavyFooter  },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});