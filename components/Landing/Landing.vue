<template>
    <div class="landing">
        <div id="slogan" ref="slogan">
            <img src="~assets/images/surrender-to-the-music.svg" type="image/svg+xml" alt=""/>
        </div>

        <div id="logo">
            <logo/>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Logo from '~/components/Logo/Logo.vue'
  @Component({
    components: { Logo }
  })
  export default class Landing extends Vue {

  }
</script>

<style scoped src="./landing.scss" lang="scss">

</style>
