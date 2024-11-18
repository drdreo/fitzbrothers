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
import facebookLogo from "~/assets/images/social/facebook.png";
import instagramLogo from "~/assets/images/social/instagram.png";
import youtubeLogo from "~/assets/images/social/youtube.png";
import tiktokLogo from "~/assets/images/social/tiktok.svg";
import emailLogo from "~/assets/images/social/email.svg";

export default defineComponent({
    data() {
        return {
            socialLinks: [
                {
                    icon: facebookLogo,
                    tag: "@fitzbrothers",
                    url: "https://facebook.com/fitzbrothers"
                },
                {
                    icon: instagramLogo,
                    tag: "@fitzbrothersmusic",
                    url: "https://instagram.com/fitzbrothersmusic/"
                },
                {
                    icon: youtubeLogo,
                    tag: "@FITZBros",
                    url: "https://youtube.com/@FITZBros"
                },
                {
                    icon: tiktokLogo,
                    tag: "@FITZBrothers",
                    url: "https://tiktok.com/@FITZBrothers"
                },
                {
                    icon: emailLogo,
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

@media (prefers-color-scheme: dark) {
    .social-platform__icon {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)
            brightness(100%) contrast(100%);
    }
}

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
