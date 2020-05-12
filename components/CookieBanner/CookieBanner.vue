<template>
    <div class="cookie-banner" v-if="!isConsent">
        <div class="cookie-banner__container is-hidden-mobile">
            <div class="cta" @click="consent">X</div>
            <p>
                This website uses cookies to give you an incredible experience. By using this website you agree to
                our
                <nuxt-link to="/termsandconditions" class="link">Terms & Conditions / Data Privacy</nuxt-link>
            </p>

        </div>
        <div class="cookie-banner__container is-hidden-tablet">
            <div class="cta" @click="consent">X</div>
            <p>
                This website uses cookies,
                <nuxt-link to="/termsandconditions" class="link">Terms / Privacy.</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    components: {}
  })
  export default class CookieBanner extends Vue {

    isConsent = true;

    mounted() {
      this.isConsent = localStorage.getItem('cookie-consent') == 'true';
    }

    consent() {
      if (process.browser) {
        localStorage.setItem('cookie-consent', 'true');
        this.isConsent = true;
      }
    }
  }
</script>

<style scoped src="./cookie-banner.scss" lang="scss">

</style>
