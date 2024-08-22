import VueLazyLoad from "vue3-lazyload";

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(VueLazyLoad, {
        observerOptions: {
            rootMargin: "400px 0px"
        }
    });
});
