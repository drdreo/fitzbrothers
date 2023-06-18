<template>
    <div>
        <Navbar />
        <Landing />
        <SinglePreview />
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
import { defineComponent } from 'vue'
import CookieBanner from '~/components/CookieBanner/CookieBanner.vue'
import Landing from '~/components/Landing/Landing.vue'
import LegalFooter from '~/components/LegalFooter/LegalFooter.vue'
import Logo from '~/components/Logo/Logo.vue'
import Mission from '~/components/Mission/Mission.vue'
import Navbar from '~/components/Navbar/Navbar.vue'
import Photos from '~/components/Photos/Photos.vue'
import SinglePreview from '~/components/SinglePreview/SinglePreview.vue'
import Social from '~/components/Social/Social.vue'

export default defineComponent({
    components: {
        CookieBanner,
        Photos,
        Landing,
        Navbar,
        Logo,
        SinglePreview,
        Mission,
        Social,
        LegalFooter
    }
})
</script>
