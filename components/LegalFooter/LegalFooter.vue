<template>
  <footer class="footer">
    <p class="is-size-7">
      <span>Fitz Brothers</span>
      <span class="seperator">|</span>
      <nuxt-link class="link" to="/termsandconditions">Terms & Conditions / Data Privacy</nuxt-link>
    </p>
  </footer>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class LegalFooter extends Vue {}
</script>

<style scoped lang="scss">
@import "~assets/styles/overrides.scss";

.footer {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}


.seperator {
  color: #dedede;
  padding-left: 5px;
  padding-right: 5px;
}

.link {
  color: $gold;

  &:hover {
    text-decoration: underline;
  }
}
</style>
