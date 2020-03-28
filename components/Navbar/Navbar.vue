<template>
    <nav id="mainNav" class="navbar is-fixed-top" :class="{ 'is-off-landing': offLanding }">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-brand">

            <a class="navbar-item bandname" data-reveal="330" href="#page-top">FITZ!</a>

            <div class="navbar-burger burger" data-target="navbarMenu" @click="menuOpen = !menuOpen"
                 :class="{ 'is-active': menuOpen }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!--SoundBar -->
        <!--<div id="soundBar" data-reveal="360" class="col-md-4 col-md-pull-4 col-sm-3 col-sm-pull-5" style=" display:inline-flex;position: absolute; padding:8px;">-->
        <!--<span id="playBtn" class="col-sm-1 btn btn-audio pull-left">-->
        <!--<i class="fa fa-play" aria-hidden="true"></i>-->
        <!--</span>-->
        <!--<div class="col-sm-10" style="top:14px;">-->
        <!--<input id="seekBar" type="range" step="0.03" value="0"/>-->
        <!--</div>-->
        <!--<span id="muteBtn" class="col-sm-1 btn btn-audio pull-right">-->
        <!--<i class="fa fa-volume-up" aria-hidden="true"></i>-->
        <!--</span>-->
        <!--</div>-->

        <div id="navbarMenu" class="navbar-menu" v-bind:class="{ 'is-active': menuOpen }">
            <div class="navbar-end">
                <a class="page-scroll navbar-item" data-reveal="553"
                   href="#upcoming-dates">Dates</a>
                <a class="page-scroll navbar-item" data-reveal="616"
                   href="#mission">Mission</a>
                <a class="page-scroll navbar-item" data-reveal="699" href="#photos">Photos</a>
                <a class="page-scroll navbar-item" data-reveal="782" href="#contact">Contact</a>

            </div>
        </div>
    </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  // Define the component in class-style
  @Component
  export default class Navbar extends Vue {
    menuOpen: boolean = false
    offLanding: boolean = false

    mounted() {
      window.addEventListener('scroll', this.handleScroll)

      document.querySelectorAll('[data-reveal]').forEach((el: Element) => {
        //@ts-ignore
        el.style.opacity = '0'
        let duration = el.getAttribute('data-reveal') || 1000

        setTimeout(() => {
          //@ts-ignore
          el.style.opacity = '1'
        }, +duration)

      })
    }

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(event: Event) {
      if (window.scrollY > window.innerHeight) {
        console.warn('TOO MUCh')
        this.offLanding = true
      } else {
        this.offLanding = false

      }
      // Any code to be executed when the window is scrolled
      return event
    }

  }
</script>

<!--<style scoped>-->
<style src="./navbar.scss" lang="scss">
</style>
<!--</style>-->
