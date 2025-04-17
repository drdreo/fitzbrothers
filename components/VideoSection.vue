<template>
    <YouTubeGrid :videos="musicVideos" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YouTubeGrid from "@/components/YouTubeGrid.vue";

export default defineComponent({
    components: {
        YouTubeGrid
    },
    data() {
        return {
            musicVideos: [
                {
                    title: "Video 1",
                    url: "https://www.youtube-nocookie.com/embed/K2StlfCk-Xs?controls=0&showinfo=0&vq=hd1080&playsinline=1"
                },
                {
                    title: "Video 2",
                    url: "https://www.youtube-nocookie.com/embed/sGMhqbUhA4E?controls=0&showinfo=0&vq=hd1080&playsinline=1"
                },
                {
                    title: "Video 3",
                    url: "https://www.youtube-nocookie.com/embed/LJjs8v8kle0?controls=0&showinfo=0&vq=hd1080&playsinline=1"
                },
                {
                    title: "Video 4",
                    url: "https://www.youtube-nocookie.com/embed/aHxVqtoO8R0?controls=0&showinfo=0&vq=hd1080&playsinline=1"
                }
            ]
        };
    }
});
</script>
