export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive("reveal", {
        beforeMount(el: HTMLElement, _) {
            el.style.opacity = "0";
        },
        mounted(el, binding) {
            let duration = binding.value || 0;

            setTimeout(() => {
                el.style.opacity = "1";
            }, duration);
        }
    });
});
