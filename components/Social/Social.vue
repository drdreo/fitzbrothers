<template>
    <section
        id="contact"
        class="section">
        <div class="container">
            <div class="columns">
                <div
                    class="column"
                    v-for="(social, imageIndex) in socialLinks"
                    :key="imageIndex">
                    <a
                        class="social-platform"
                        target="_blank"
                        :href="social.url">
                        <img
                            :src="social.icon"
                            class="social-platform__icon"
                            alt="" />
                        <div class="social-platform__tag">
                            {{ social.tag }}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            socialLinks: [
                {
                    icon: "images/social/facebook.png",
                    tag: "@fitzbrothers",
                    url: "https://facebook.com/fitzbrothers"
                },
                {
                    icon: "images/social/instagram.png",
                    tag: "@fitzbrothersmusic",
                    url: "https://instagram.com/fitzbrothersmusic/"
                },
                {
                    icon: "images/social/youtube.png",
                    tag: "@FITZBros",
                    url: "https://youtube.com/@FITZBros"
                },
                {
                    icon: "images/social/tiktok.svg",
                    tag: "@FITZBrothers",
                    url: "https://tiktok.com/@FITZBrothers"
                },
                {
                    icon: "images/social/email.svg",
                    tag: "info@fitz-bros.com",
                    url: "mailto:info@fitz-bros.com"
                }
            ]
        };
    }
});
</script>

<style scoped lang="scss">
@use "~/assets/styles/overrides" as overrides;

.social-platform {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    color: var(--bulma-text);

    &:hover {
        color: overrides.$gold;
    }

    &__icon {
        height: 50px;
    }
}
</style>
