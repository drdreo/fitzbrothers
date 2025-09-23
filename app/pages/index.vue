<template>
    <div>
        <Navbar />
        <Landing />
        <section class="section">
            <div class="container">
                <div class="columns">
                    <SingleDetails />
                </div>

                <TourSection />

                <VideoSection />

                <MusicStores />

                <NewsletterSignup />
            </div>
        </section>
        <Mission />
        <Photos />
        <Social />
        <LegalFooter />
        <ClientOnly>
            <CookieBanner />
        </ClientOnly>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CookieBanner from "~/components/CookieBanner/CookieBanner.vue";
import Landing from "~/components/Landing/Landing.vue";
import LegalFooter from "~/components/LegalFooter/LegalFooter.vue";
import Logo from "~/components/Logo/Logo.vue";
import Mission from "~/components/Mission/Mission.vue";
import Navbar from "~/components/Navbar/Navbar.vue";
import Photos from "~/components/Photos/Photos.vue";
import MusicStores from "~/components/MusicStores.vue";
import NewsletterSignup from "~/components/NewsletterSignup.vue";
import SingleDetails from "~/components/SingleDetails/SingleDetails.vue";
import TourSection from "~/components/TourSection.vue";
import VideoSection from "~/components/VideoSection.vue";
import Social from "~/components/Social/Social.vue";

export default defineComponent({
    components: {
        VideoSection,
        MusicStores,
        NewsletterSignup,
        TourSection,
        SingleDetails,
        CookieBanner,
        Photos,
        Landing,
        Navbar,
        Logo,
        Mission,
        Social,
        LegalFooter
    }
});
</script>
