<template>
    <div class="single-preview has-text-centered column is-12">
        <h2 class="title has-text-weight-bold">New Single</h2>
        <p class="subtitle is-6 is-uppercase">{{ displayDate }}</p>

        <div class="columns">
            <div class="column is-6 is-offset-3 is-centered">
                <figure
                    class="image is-square"
                    style="max-width: 350px; margin: auto">
                    <img
                        src="~assets/images/single_cover.jpg"
                        alt="Single Cover" />
                </figure>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            currentDate: new Date(),
            targetDate: new Date("September 13, 2024")
        };
    },
    computed: {
        displayDate() {
            if (this.currentDate > this.targetDate) {
                return "Half Past Five"; // "Out now";
            } else {
                // Format the target date according to your requirements
                return this.targetDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                });
            }
        }
    }
});
</script>
