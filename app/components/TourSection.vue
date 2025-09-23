<template>
    <section
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
import { defineComponent } from "vue";
import { showDates } from "~/data/dates";

export default defineComponent({
    data() {
        return {
            showDates
        };
    }
});
</script>
