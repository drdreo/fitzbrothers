<template>
    <section
        v-if="hasUpcomingShows"
        class="section has-text-centered"
        id="tour">
        <h2 class="title is-4">Upcoming Shows</h2>
        <hr />
        <TourDates
            :showDates="showDates"
            :on-main-page="true" />
        <hr />
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { showDates } from "~/data/dates";

export default defineComponent({
    setup() {
        const hasUpcomingShows = computed(() => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return showDates.some((date) => {
                const eventDate = new Date(date.date);
                return eventDate >= today;
            });
        });

        return {
            showDates,
            hasUpcomingShows
        };
    }
});
</script>
