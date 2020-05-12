<template>
    <nav id="mainNav" class="navbar is-fixed-top" :class="{ 'is-on-landing': onLanding }">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-brand">
            <a class="navbar-item bandname" style="opacity:0;" v-reveal="330" href="#page-top">FITZ BROTHERS</a>

            <div class="navbar-burger burger" data-target="navbarMenu" @click="menuOpen = !menuOpen"
                 :class="{ 'is-active': menuOpen }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarMenu" class="navbar-menu" v-bind:class="{ 'is-active': menuOpen }">
            <div class="navbar-end">
                <!--                <a class="page-scroll navbar-item" v-reveal="553" style="opacity:0;"-->
                <!--                   href="#upcoming-dates">Dates</a>-->
                <a class="page-scroll navbar-item" v-reveal="616" style="opacity:0;"
                   v-scroll-to="'#mission'"
                   href="#">Mission</a>
                <a class="page-scroll navbar-item" v-reveal="699" style="opacity:0;"
                   v-scroll-to="'#photos'"
                   href="#">Photos</a>
                <a class="page-scroll navbar-item" v-reveal="782" style="opacity:0;"
                   v-scroll-to="'#contact'"
                   href="#">Contact</a>

            </div>
        </div>
    </nav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Navbar extends Vue {
    menuOpen: boolean = false;
    onLanding: boolean = true;

    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    }

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event: Event) {
      this.onLanding = window.scrollY + 50 < window.innerHeight;
      // Any code to be executed when the window is scrolled
      return event;
    }

  }
</script>

<!--<style scoped>-->
<style src="./navbar.scss" lang="scss">
</style>
<!--</style>-->
