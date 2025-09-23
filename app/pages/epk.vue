<template>
    <div class="container pt-6">
        <h1 class="title has-text-centered">Electronic Press Kit</h1>

        <!-- Artist Bio Section -->
        <section
            class="section"
            id="bio">
            <h2 class="title is-4">About the Band</h2>
            <hr class="mx-0" />

            <div class="columns is-variable is-8">
                <div class="column is-one-third">
                    <figure class="image">
                        <img
                            src="~/assets/images/HomepageHeader.jpg"
                            alt="Band Photo" />
                    </figure>
                </div>
                <div class="column">
                    <p class="content">
                        Great passion, red beards and a common vision. That’s
                        what connects the two brothers from northern Austria,
                        Florian Sebastian and Felix Fitz.
                    </p>
                    <p class="content my-2">
                        After several individual musical projects, partly solo,
                        partly in different bands, the two have now released
                        several singles together (“Golden Trees”, “Sunday”,
                        “Groggy”, etc.) and developed more and more their very
                        own sound. Stylistically, the duo moves somewhere
                        between pop and indie, difficult to pin down, but
                        therefore all the more exciting. In any case, they are
                        always about more than just nice music - they’re about
                        feelings, passion and the human condition.
                    </p>
                    <p class="content">
                        In their own words: “Music has always been our way to
                        sort out our thoughts and confront our emotions. It's a
                        way of growing and helping others grow into greater
                        human beings. We hope we can inspire you and give you
                        some sort of experience that gets you more in touch with
                        yourself. That’s what music has always done. That’s what
                        it does for us.”
                    </p>
                </div>
            </div>
        </section>

        <!-- Music Samples Section -->
        <section
            class="section"
            id="music">
            <h2 class="title is-4">Music</h2>
            <hr class="mx-0" />
            <p class="content mb-2">Stream our top tracks:</p>
            <div class="box">
                <iframe
                    src="https://open.spotify.com/embed/artist/5fZMIiZ4K0VMfi4Ebo6M71"
                    width="100%"
                    height="380"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
                </iframe>
            </div>
        </section>

        <!-- Videos Section -->
        <section
            class="section"
            id="videos">
            <h2 class="title is-4">Music Videos</h2>
            <hr class="mx-0" />
            <YouTubeGrid :videos="videos" />
        </section>

        <!-- Media Coverage Section -->
        <section
            class="section"
            id="press">
            <h2 class="title is-4">Media Coverage</h2>
            <hr class="mx-0" />
            <div class="columns is-multiline">
                <div
                    class="column is-one-third"
                    v-for="item in liveItems"
                    :key="item.title">
                    <div class="box">
                        <h4 class="title is-6">{{ item.title }}</h4>
                        <video
                            class="live-video"
                            :src="item.source"
                            controls />
                    </div>
                </div>
            </div>
        </section>

        <!-- Press Photos Section -->
        <section
            class="section"
            id="photos">
            <h2 class="title is-4">Press Photos</h2>
            <hr class="mx-0" />

            <vue-easy-lightbox
                :visible="visibleRef"
                :imgs="images"
                :index="indexRef"
                @hide="onHide"></vue-easy-lightbox>
            <div class="columns is-multiline">
                <div
                    class="column is-one-third is-clickable"
                    v-for="(thumb, index) in thumbnails"
                    :key="index"
                    @click="() => showImg(index)">
                    <figure class="image">
                        <img
                            v-lazy="thumb"
                            alt="Press Photo" />
                    </figure>
                </div>
            </div>
            <p class="has-text-right is-italic">
                Photos by Lukas Johann © 2025
            </p>
        </section>

        <!-- Tour Dates Section -->
        <section
            class="section"
            id="tour">
            <h2 class="title is-4">Upcoming Shows</h2>
            <hr class="mx-0" />
            <TourDates :showDates="showDates" />
        </section>

        <!-- Social Media Section -->
        <section
            class="section"
            id="social">
            <h2 class="title is-4">Connect With Us</h2>
            <hr class="mx-0" />
            <Social />
        </section>
    </div>
</template>

<script setup>
useHead({
    title: "Fitz Brothers (official) | Electronic Press Kit - EPK",
    meta: [
        {
            name: "description",
            content: "Official Electronic Press Kit for Fitz Brothers"
        }
    ]
});
</script>
<script>
import TourDates from "@/components/TourDates.vue";
import YouTubeGrid from "@/components/YouTubeGrid.vue";

import VueEasyLightbox from "vue-easy-lightbox";
import photo1 from "~/assets/images/epk/1.jpg";
import photo1_thumb from "~/assets/images/epk/1.jpg";
import photo2 from "~/assets/images/epk/2.jpg";
import photo3 from "~/assets/images/epk/3.jpg";
import photo4 from "~/assets/images/epk/4.jpg";
import photo4_thumb from "~/assets/images/epk/4.jpg";
import photo5 from "~/assets/images/epk/5.jpg";
import photo5_thumb from "~/assets/images/epk/5.jpg";
import photo6 from "~/assets/images/epk/6.jpg";

import { showDates } from "~/data/dates";

export default {
    components: {
        TourDates,
        VueEasyLightbox,
        YouTubeGrid
    },
    data() {
        return {
            showDates,
            videos: [
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
            ],
            liveItems: [
                {
                    source: "http://fitzbrothers.at/static/videos/so_many_times_live.mov",
                    title: "So Many Times live"
                },
                {
                    source: "http://fitzbrothers.at/static/videos/worth_your_while_live.mp4",
                    title: "Worth Your While live"
                }
            ],
            visibleRef: false,
            indexRef: 0,
            images: [photo5, photo1, photo4, photo2, photo3, photo6],
            thumbnails: [photo5_thumb, photo1_thumb, photo4_thumb]
        };
    },
    methods: {
        showImg(index) {
            this.indexRef = index;
            this.visibleRef = true;
        },
        onHide() {
            this.visibleRef = false;
        }
    }
};
</script>

<style scoped>
.live-video {
    height: 300px;
}
</style>
