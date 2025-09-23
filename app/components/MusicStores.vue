<template>
    <section class="section cta">
        <a
            v-for="(store, index) in musicStores"
            :key="index"
            :href="store.href"
            target="_blank"
            :title="store.title">
            <img
                :src="store.src"
                :alt="store.title" />
        </a>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import itunesIcon from "~/assets/images/ctas/itunes.svg";
import amazonIcon from "~/assets/images/ctas/amazon.svg";
import deezerIcon from "~/assets/images/ctas/deezer.svg";
import spotifyIcon from "~/assets/images/ctas/spotify.svg";
import soundCloudIcon from "~/assets/images/ctas/soundcloud.png";

export default defineComponent({
    data() {
        return {
            musicStores: [
                {
                    href: "https://music.apple.com/at/artist/fitz-brothers/1506988785?l=en",
                    title: "Listen on iTunes",
                    src: itunesIcon
                },
                {
                    href: "https://music.amazon.de/artists/B086ZK8XMM?ref=dm_sh_Glqu3oCByvvDwcLMmlrqFJFsG",
                    title: "Listen on Amazon",
                    src: amazonIcon
                },
                {
                    href: "https://open.spotify.com/artist/5fZMIiZ4K0VMfi4Ebo6M71?si=ZeduSPMbRJSGm3_ehCaTyQ",
                    title: "Listen on Spotify",
                    src: spotifyIcon
                },
                {
                    href: "https://www.deezer.com/artist/91013882?utm_source=deezer&utm_content=artist-91013882&utm_term=1720846922_1587904265&utm_medium=web",
                    title: "Listen on Deezer",
                    src: deezerIcon
                },
                {
                    href: "https://soundcloud.com/fitzbrothers",
                    title: "Listen on Soundcloud",
                    src: soundCloudIcon
                }
            ]
        };
    }
});
</script>

<style scoped lang="scss">
.cta {
    text-align: center;

    a {
        display: inline-block;
    }

    img {
        width: 175px;
        margin-right: var(--bulma-column-gap);
    }

    .google-cta {
        width: auto;
        height: 53px;
    }

    .soundcloud-cta {
        width: auto;
        height: 53px;
    }
}
</style>
