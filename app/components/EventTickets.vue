<template>
    <section
        v-if="hasUpcomingShows"
        class="section event-tickets has-text-centered">
        <h2 class="title is-4">Get Your Tickets</h2>
        <hr />
        <div class="eventim-container">
            <iframe
                id="eventim-light-iframe-v2-696f593e3311675282846f66"
                src="https://www.eventim-light.com/at/a/696f593e3311675282846f66/iframe/"
                width="100%"
                data-scroll="true"
                data-scroll-offset-y="0"
                name="eventim-light-iframe-v2-696f593e3311675282846f66">
            </iframe>
        </div>
        <hr />
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { showDates } from "~/data/dates";

export default defineComponent({
    name: "EventTickets",
    setup() {
        const hasUpcomingShows = computed(() => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return showDates.some((date) => {
                const eventDate = new Date(date.date);
                return eventDate >= today;
            });
        });

        onMounted(() => {
            if (!hasUpcomingShows.value) return;

            // Load Eventim Light script dynamically
            const existingScript = document.getElementById(
                "eventim-light-script"
            );
            if (!existingScript) {
                const script = document.createElement("script");
                script.id = "eventim-light-script";
                script.src =
                    "https://www.eventim-light.com/at/a/696f593e3311675282846f66/public/iframe/el-shop.js";
                script.async = true;
                document.body.appendChild(script);
            }
        });

        return {
            hasUpcomingShows
        };
    }
});
</script>

<style scoped lang="scss">
.event-tickets {
    .eventim-container {
        max-width: 900px;
        margin: 0 auto;

        iframe {
            min-height: 400px;
            border: none;
            overflow: hidden;
        }
    }
}
</style>
