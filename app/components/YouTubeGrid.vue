<template>
    <div class="fixed-grid has-1-cols-mobile">
        <div class="grid">
            <div
                class="cell"
                v-for="(video, index) in videos"
                :key="index">
                <figure class="image is-2by1">
                    <iframe
                        :title="video.title"
                        class="has-ratio"
                        width="2100"
                        height="890"
                        :src="video.url"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "YouTubeGrid",
    props: {
        videos: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped></style>
