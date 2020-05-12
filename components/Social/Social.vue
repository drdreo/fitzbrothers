<template>
    <section id="contact" class="section">
        <div class="container">

            <div class="columns">

                <div class="column" v-for="(social, imageIndex) in socialLinks" :key="imageIndex">
                    <a class="social-platform" target="_blank" :href="social.url">
                        <img :src="social.icon" class="social-platform__icon" alt=""/>
                        <div class="social-platform__tag">
                            {{social.tag}}
                        </div>
                    </a>
                </div>
            </div>


        </div>
    </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    components: {}
  })
  export default class Social extends Vue {

    socialLinks = [
      {
        icon: require('~/assets/images/social/facebook.png'),
        tag: '@fitzbrothers',
        url: 'https://facebook.com/fitzbrothers'
      },
      { icon: require('~/assets/images/social/instagram.png'), tag: '@fitz_brothers', url: 'https://instagram.com/fitz_brothers/' },
      { icon: require('~/assets/images/social/youtube.png'), tag: 'Fitz Brothers', url: 'https://www.youtube.com/channel/UC5zH2yorKLyQVJMeXz_egGg' },
      { icon: require('~/assets/images/social/email.svg'), tag: 'info@fitz-bros.com', url: 'mailto:info@fitz-bros.com' }
    ];
  }
</script>

<style scoped src="./social.scss" lang="scss">

</style>
