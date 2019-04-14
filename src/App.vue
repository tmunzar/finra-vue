<template>
  <div>
     <nav id="header" class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" tag="a" class="navbar-item">
              <img src="./assets/logo.svg" width="250">
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            
            </div>

            <!-- <div class="navbar-end">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    About Me
                </a>

                <a class="navbar-item">
                    Work
                </a>

                <a class="navbar-item">
                    Contact
                </a>
            </div> -->
        </div>
    </nav>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import TopNav from '@/components/TopNav'
export default {
  // components: { TopNav },
  name: 'App'
}
</script>

<style lang="scss">

@import "~bulma/sass/utilities/_all";

#app {
  // margin-top: 60px;
}



// Set your colors
$primary: #465EAB;
$primary-invert: findColorInvert($primary);
$warning: #F58D2D;
$warning-invert: findColorInvert($warning);

$black: #000000;
$white: #ffffff;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    // "white": ($white, $black),
    "black": ($black, $white),
    // "light": ($light, $light-invert),
    // "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    // "info": ($info, $info-invert),
    // "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    // "danger": ($danger, $danger-invert),
    // "twitter": ($twitter, $twitter-invert)
);

@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  color: $black;
  font-family: 'Roboto', sans-serif;
}
</style>
