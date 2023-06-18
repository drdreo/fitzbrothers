<template>
    <section id="mission" class="section">
        <div class="container has-text-white has-text-centered">
            <h2 class="title has-text-white">Our Mission</h2>
            <hr />
            <p>
                Music has always been our way to sort out our thoughts and
                confront our emotions. It's a way of growing and helping others
                grow into greater human beings. We hope we can inspire you and
                give you some sort of experience that gets you more in touch
                with yourself.
            </p>
            <br />
            <p>
                That's what music has always done. That's what it does for us.
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="scss">
.section {
    background-image: url('~/assets/images/puppet.jpg');
    background-size: cover;
}
</style>
