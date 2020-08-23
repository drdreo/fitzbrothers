<template>
    <section id="photos" class="section has-text-centered">
        <h2 class="title">Photos</h2>
        <hr/>

        <CoolLightBox
                :items="images"
                :index="index"
                @close="index = null">
        </CoolLightBox>
        <div class="gallery columns is-gapless">
            <div class="column is-4" v-for="(image, imageIndex) in images" :key="imageIndex"
                 @click="index = imageIndex">
                <figure class="image">
                    <img v-lazy="image.thumb" alt="Band Image"/>
                </figure>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  // use the component
  import CoolLightBox from 'vue-cool-lightbox';
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

  const photo1 = require('~/assets/images/gallery/7.jpg');
  const photo1_thumb = require('~/assets/images/gallery/7_thumb.jpg');
  const photo2 = require('~/assets/images/gallery/mid.jpg');
  const photo2_thumb = require('~/assets/images/gallery/mid_thumb.jpg');
  const photo3 = require('~/assets/images/gallery/5.jpg');
  const photo3_thumb =  require('~/assets/images/gallery/5_thumb.jpg');

  @Component({
    components: {
      CoolLightBox
    }
  })
  export default class Photos extends Vue {
    images = [
      { src: photo1, thumb: photo1_thumb },
      { src: photo2, thumb: photo2_thumb },
      { src: photo3, thumb: photo3_thumb }
    ];
    index = null;
  }
</script>

<style scoped src="./photos.scss" lang="scss">

</style>
