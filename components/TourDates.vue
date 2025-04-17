<template>
    <div class="tour-dates">
        <div
            class="columns is-multiline"
            :class="{ 'is-centered': onMainPage }">
            <div
                class="column is-one-third"
                v-for="(date, index) in showDates"
                :key="index">
                <div
                    class="box"
                    :style="getBackgroundStyle(date.bg)">
                    <div class="overlay">
                        <h3 class="title is-5">{{ date.date }}</h3>
                        <p class="subtitle is-6">{{ date.venue }}</p>
                        <p class="content">
                            {{ date.city }}, {{ date.country }}
                        </p>
                        <a
                            :href="date.ticketLink"
                            class="button is-link is-small"
                            target="_blank">
                            Get Tickets
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <template v-if="upcomingReleases?.length">
            <h2 class="title is-6">Upcoming Releases</h2>
            <div class="columns is-multiline">
                <div
                    class="column is-one-third"
                    v-for="(release, index) in upcomingReleases"
                    :key="index">
                    <div class="box">
                        <div class="overlay">
                            <h4 class="title is-5">"{{ release.title }}"</h4>
                            <p class="subtitle is-6">
                                Release Date: {{ release.date }}
                            </p>
                            <p class="content">{{ release.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import viennaBg from "~/assets/images/cities/vienna.jpg";
import enzersdorfBg from "~/assets/images/cities/enzersdorf.webp";
import waidhofenBg from "~/assets/images/cities/waidhofen.jpg";

export default {
    name: "TourDates",
    props: {
        onMainPage: {
            type: Boolean,
            required: false
        },
        showDates: {
            type: Array,
            required: true
        },
        upcomingReleases: {
            type: Array,
            required: false
        }
    },
    methods: {
        getBackgroundStyle(city) {
            const cityBackgrounds = {
                vienna: viennaBg,
                waidhofen: waidhofenBg,
                enzersdorf: enzersdorfBg
            };
            const backgroundImage = cityBackgrounds[city.toLowerCase()] || null;
            return backgroundImage
                ? {
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  }
                : {
                      backgroundImage: `url(${viennaBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  };
        }
    }
};
</script>

<style scoped>
.tour-dates {
    .box {
        position: relative;
        text-align: center;
        padding: 1.5rem;
        border: 1px solid #ddd;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        color: white; /* Ensure text is visible on dark backgrounds */
    }

    .box:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .overlay {
        position: relative;
        z-index: 2;
    }

    .box::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7); /* Semi-transparent overlay */
        z-index: 1;
    }

    .button {
        margin-top: 1rem;
    }
}
</style>
