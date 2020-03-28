import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'


// specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  mobile: false,
})
