<template>
    <div>
        <Navbar/>
        <Landing/>
        <SinglePreview/>
        <Mission/>
        <Photos/>
        <Social/>
        <LegalFooter/>
        <client-only>
            <CookieBanner/>
        </client-only>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Logo from '~/components/Logo/Logo.vue';
  import Navbar from '~/components/Navbar/Navbar.vue';
  import Landing from '~/components/Landing/Landing.vue';
  import SinglePreview from '~/components/SinglePreview/SinglePreview.vue';
  import Mission from '~/components/Mission/Mission.vue';
  import Photos from '~/components/Photos/Photos.vue';
  import Social from '~/components/Social/Social.vue';
  import LegalFooter from '~/components/LegalFooter/LegalFooter.vue';
  import CookieBanner from '~/components/CookieBanner/CookieBanner.vue';

  export default Vue.extend({
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
  });
</script>
