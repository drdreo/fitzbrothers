<template>
    <section
        id="photos"
        class="section has-text-centered">
        <h2 class="title">Photos</h2>
        <hr />

        <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="images"
            :index="indexRef"
            @hide="onHide"></vue-easy-lightbox>

        <div class="gallery columns is-gapless">
            <div
                class="column is-4"
                v-for="(thumb, imageIndex) in thumbnails"
                :key="imageIndex"
                @click="() => showImg(imageIndex)">
                <figure class="image">
                    <img
                        v-lazy="thumb"
                        alt="Band Image" />
                </figure>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

import photo1 from "~/assets/images/gallery/left.jpg";
import photo1_thumb from "~/assets/images/gallery/left_thumb.jpg";
import photo2 from "~/assets/images/gallery/mid.jpg";
import photo2_thumb from "~/assets/images/gallery/mid_thumb.jpg";
import photo3 from "~/assets/images/gallery/right.jpg";
import photo3_thumb from "~/assets/images/gallery/right_thumb.jpg";

export default defineComponent({
    components: {
        VueEasyLightbox
    },
    setup() {
        const visibleRef = ref(false);
        const indexRef = ref(0);
        const showImg = (index: number) => {
            indexRef.value = index;
            visibleRef.value = true;
        };
        const onHide = () => (visibleRef.value = false);

        return {
            visibleRef,
            indexRef,
            images: [photo1, photo2, photo3],
            thumbnails: [photo1_thumb, photo2_thumb, photo3_thumb],
            showImg,
            onHide
        };
    }
});
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
