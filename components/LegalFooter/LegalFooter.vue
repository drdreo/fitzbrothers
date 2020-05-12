<template>
    <section class="section">
        <div class="is-pulled-right">
            <p class="is-size-7">
                <span>Fitz Brothers</span>
                <span style="color: #dedede;padding-left: 5px; padding-right: 5px;">|</span>
                <nuxt-link class="link" to="/termsandconditions">Terms & Conditions / Data Privacy</nuxt-link>
            </p>

        </div>
    </section>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class LegalFooter extends Vue {

  }
</script>

<style scoped lang="scss">
    @import "~assets/styles/overrides.scss";

    .link {
        color: $gold;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
