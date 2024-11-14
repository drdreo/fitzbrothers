<template>
    <div
        class="cookie-banner"
        v-if="!isConsent">
        <div class="cookie-banner__container is-hidden-mobile">
            <div
                class="cta"
                @click="consent">
                X
            </div>
            <p>
                This website uses cookies to give you an incredible experience.
                By using this website you agree to our
                <NuxtLink
                    to="/termsandconditions"
                    class="link"
                    >Terms & Conditions / Data Privacy</NuxtLink
                >
            </p>
        </div>
        <div class="cookie-banner__container is-hidden-tablet">
            <div
                class="cta"
                @click="consent">
                X
            </div>
            <p>
                This website uses cookies,
                <NuxtLink
                    to="/termsandconditions"
                    class="link"
                    >Terms / Privacy.</NuxtLink
                >
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

declare const fbq: Function;

const PIXEL_ID = "1060878250708992";

export default defineComponent({
    data() {
        return {
            isConsent: true
        };
    },
    mounted() {
        this.isConsent = localStorage.getItem("cookie-consent") === "true";

        if (this.isConsent) {
            setTimeout(() => {
                fbq("init", PIXEL_ID);
                fbq("track", "PageView");
            }, 3000);
        }
    },
    methods: {
        consent() {
            localStorage.setItem("cookie-consent", "true");
            this.isConsent = true;
            fbq("init", PIXEL_ID);
            fbq("track", "PageView");
        }
    }
});
</script>

<style scoped lang="scss">
@use "~/assets/styles/overrides" as overrides;

.cookie-banner {
    &__container {
        display: inline-flex;
        justify-content: center;
        z-index: 2;
        opacity: 0.8;
        position: fixed;
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
        font-size: 14px;
        background-color: #000;
        color: #fff;
        padding: 4px;
    }

    .cta {
        color: overrides.$gold;
        cursor: pointer;
        margin: 0 1rem;
    }

    .link {
        color: overrides.$gold;
    }
}
</style>
