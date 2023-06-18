<template>
    <section id="photos" class="section has-text-centered">
        <h2 class="title">Photos</h2>
        <hr />

        <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="images"
            :index="indexRef"
            @hide="onHide"
        ></vue-easy-lightbox>

        <div class="gallery columns is-gapless">
            <div
                class="column is-4"
                v-for="(thumb, imageIndex) in thumbnails"
                :key="imageIndex"
                @click="() => showImg(imageIndex)"
            >
                <figure class="image">
                    <img :src="thumb" alt="Band Image" />
                </figure>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

const photo1 = 'images/gallery/left.jpg'
const photo1_thumb = 'images/gallery/left_thumb.jpg'
const photo2 = 'images/gallery/mid.jpg'
const photo2_thumb = 'images/gallery/mid_thumb.jpg'
const photo3 = 'images/gallery/right.jpg'
const photo3_thumb = 'images/gallery/right_thumb.jpg'

export default defineComponent({
    components: {
        VueEasyLightbox
    },
    setup() {
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const showImg = (index: number) => {
            console.log(index)
            indexRef.value = index
            visibleRef.value = true
        }
        const onHide = () => (visibleRef.value = false)

        return {
            visibleRef,
            indexRef,
            images: [photo1, photo2, photo3],
            thumbnails: [photo1_thumb, photo2_thumb, photo3_thumb],
            showImg,
            onHide
        }
    }
})
</script>

<style scoped lang="scss">
.section {
    padding-left: 0;
    padding-right: 0;
}

.gallery {
    background-color: #050306;

    .image {
        overflow: hidden;

        cursor: pointer;
        height: 100%;

        img {
            transition: all 0.35s;
            height: 100%;
        }

        &:hover {
            img {
                transform: scale(1.03);
            }
        }
    }
}
</style>
