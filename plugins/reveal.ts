import Vue from 'vue';

Vue.directive('reveal', {
  bind: (el, binding, vnode) => {
    el.style.opacity = '0';
  },
  inserted: (el, binding, vnode) => {
    let duration = binding.value || 0;

    setTimeout(() => {
      el.style.opacity = '1';
    }, duration);
  }
});
