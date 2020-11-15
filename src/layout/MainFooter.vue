<template>
  <footer
    class="footer"
    :data-background-color="backgroundColor"
  >
    <div class="container" style="padding: 0; max-width: 100%;">
        <ul class="row">
          <li class="col-md-4 centeraligned">
            GU Orbit &copy;{{ year }}         
          </li>
          <span class="col-md-4 centeraligned">
            <li>
              <a
                class="nav-link"
                rel="tooltip"
                title="Like us on Facebook"
                data-placement="bottom"
                href="https://www.facebook.com/GUOrbit/"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                class="nav-link"
                rel="tooltip"
                title="Follow us on Instagram"
                data-placement="bottom"
                href="https://www.instagram.com/gu.orbit/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                class="nav-link"
                rel="tooltip"
                title="Connect with us on LinkedIn"
                data-placement="bottom"
                href="https://www.linkedin.com/company/gu-orbit/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </span>
          <li class="col-md-4 centeraligned">
            University Avenue, Hillhead, Glasgow, GLG G12 8QQ
          </li>
        </ul>
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
<style scoped>  
  .fab {
    font-size: 24px;
  }
  .centeraligned {
    text-align: center;
  }
</style>