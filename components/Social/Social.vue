<template>
    <section id="contact" class="section">
        <div class="container">
            <div class="columns">
                <div
                    class="column"
                    v-for="(social, imageIndex) in socialLinks"
                    :key="imageIndex"
                >
                    <a
                        class="social-platform"
                        target="_blank"
                        :href="social.url"
                    >
                        <img
                            :src="social.icon"
                            class="social-platform__icon"
                            alt=""
                        />
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
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            socialLinks: [
                {
                    icon: 'images/social/facebook.png',
                    tag: '@fitzbrothers',
                    url: 'https://facebook.com/fitzbrothers'
                },
                {
                    icon: 'images/social/instagram.png',
                    tag: '@fitz_brothers',
                    url: 'https://instagram.com/fitz_brothers/'
                },
                {
                    icon: 'images/social/youtube.png',
                    tag: 'Fitz Brothers',
                    url:
                        'https://www.youtube.com/channel/UC5zH2yorKLyQVJMeXz_egGg'
                },
                {
                    icon: 'images/social/email.svg',
                    tag: 'info@fitz-bros.com',
                    url: 'mailto:info@fitz-bros.com'
                }
            ]
        }
    }
})
</script>

<style scoped lang="scss">
@import '~/assets/styles/overrides.scss';

.social-platform {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    color: $black;

    &:hover {
        color: $gold;
    }

    &__icon {
        height: 50px;
    }
}
</style>
