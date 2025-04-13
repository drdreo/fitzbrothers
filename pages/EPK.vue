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
                        Fitz Brothers is a [genre] band from Austria, Vienna,
                        known for their [unique style/characteristic]. Formed in
                        [year], the group has been making waves in the
                        [local/national/international] music scene with their
                        distinctive sound that blends elements of [musical
                        influences].
                    </p>
                    <p class="content">
                        The band consists of Felix and Florian Fitz. Drawing
                        inspiration from artists like [influential artists],
                        they create music that [describe your sound/vibe].
                    </p>
                    <p class="content">
                        Career highlights include [performances, achievements,
                        or collaborations]. Their most recent release, "[latest
                        release]", showcases the band's evolution and [describe
                        what makes it special].
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
            <p class="content">Stream our top tracks below:</p>
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
            <div class="columns is-multiline">
                <div
                    class="column is-one-third"
                    v-for="track in tracks"
                    :key="track.title">
                    <div class="box">
                        <h4 class="title is-6">{{ track.title }}</h4>
                        <p class="content">{{ track.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Videos Section -->
        <section
            class="section"
            id="videos">
            <h2 class="title is-4">Videos</h2>
            <hr class="mx-0" />
            <YouTubeGrid :videos="videos" />
        </section>

        <!-- Press Photos Section -->
        <section
            class="section"
            id="photos">
            <h2 class="title is-4">Press Photos</h2>
            <hr class="mx-0" />

            <p class="content">
                High-resolution photos available for download. Click on images
                to view full size.
            </p>
            <vue-easy-lightbox
                :visible="visibleRef"
                :imgs="images"
                :index="indexRef"
                @hide="onHide"></vue-easy-lightbox>
            <div class="columns is-multiline">
                <div
                    class="column is-one-third"
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
                Photos by [Photographer Name] © [Year]
            </p>
        </section>

        <!-- Press & Media Coverage Section -->
        <section
            class="section"
            id="press">
            <h2 class="title is-4">Press & Media Coverage</h2>
            <hr class="mx-0" />
            <div class="columns is-multiline">
                <div
                    class="column is-half"
                    v-for="press in pressItems"
                    :key="press.title">
                    <div class="box">
                        <h4 class="title is-6">{{ press.title }}</h4>
                        <p class="content has-text-grey">{{ press.source }}</p>
                        <p class="content is-italic">{{ press.quote }}</p>
                        <a
                            :href="press.link"
                            class="button is-link is-small"
                            >Read Full Article</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- Tour Dates Section -->
        <section
            class="section"
            id="tour">
            <h2 class="title is-4">Tour Dates & Upcoming Releases</h2>
            <hr class="mx-0" />
            <TourDates
                :tourDates="tourDates"
                :upcomingReleases="upcomingReleases" />
        </section>

        <!-- Social Media & Streaming Links Section -->
        <section
            class="section"
            id="social">
            <h2 class="title is-4">Connect With Us</h2>
            <hr class="mx-0" />
            <Social />
        </section>
    </div>
</template>

<script>
import photo1 from "~/assets/images/gallery/left.jpg";
import photo1_thumb from "~/assets/images/gallery/left_thumb.jpg";
import photo2 from "~/assets/images/gallery/mid.jpg";
import photo2_thumb from "~/assets/images/gallery/mid_thumb.jpg";
import photo3 from "~/assets/images/gallery/right.jpg";
import photo3_thumb from "~/assets/images/gallery/right_thumb.jpg";

import VueEasyLightbox from "vue-easy-lightbox";
import YouTubeGrid from "@/components/YouTubeGrid.vue";
import TourDates from "@/components/TourDates.vue";
import { tourDates, upcomingReleases } from "@/data/tourDates";

export default {
    name: "EPKView",
    components: {
        TourDates,
        VueEasyLightbox,
        YouTubeGrid
    },
    metaInfo: {
        title: "Fitz Brothers (official) | Electronic Press Kit - EPK",
        meta: [
            {
                name: "description",
                content: "Official Electronic Press Kit for [Your Band Name]"
            }
        ]
    },
    data() {
        return {
            tourDates,
            upcomingReleases,
            tracks: [
                // ...existing data...
                {
                    title: "If You Want It",
                    description: "Description of Track 1"
                },
                {
                    title: "Half Past Five",
                    description: "Description of Track 2"
                },
                {
                    title: "Golden Trees",
                    description: "Description of Track 3"
                },
                {
                    title: "Track 4",
                    description: "Description of Track 4"
                }
            ],
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
            pressItems: [
                // ...existing data...
                {
                    title: "Press Item 1",
                    source: "Source Name",
                    quote: "A quote from the article.",
                    link: "https://example.com"
                },
                {
                    title: "Press Item 2",
                    source: "Source Name",
                    quote: "A quote from the article.",
                    link: "https://example.com"
                },
                {
                    title: "Press Item 3",
                    source: "Source Name",
                    quote: "A quote from the article.",
                    link: "https://example.com"
                }
            ],
            visibleRef: false,
            indexRef: 0,
            images: [photo1, photo2, photo3],
            thumbnails: [photo1_thumb, photo2_thumb, photo3_thumb]
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

<style scoped></style>
