<template>
    <section id="mission" class="section" v-lazy:background-image="require('~/assets/images/puppet.jpg')">
        <div class="container has-text-white has-text-centered">

            <h2 class="title has-text-white">Our Mission</h2>
            <hr/>
            <p>We are two brothers aiming to create powerful music that can take you over entirely
                and open up a different world within yourself.</p>
            <br/>
            <p>Through our music we carry on the name of our ancestors.</p>
        </div>
    </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    components: {}
  })
  export default class Mission extends Vue {

  }
</script>

<style scoped src="./mission.scss" lang="scss">

</style>
