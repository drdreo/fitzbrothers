<template>
    <div class="landing">
        <!--        <div id="slogan" ref="slogan">-->
        <!--            <img-->
        <!--                src="~assets/images/surrender-to-the-music.svg"-->
        <!--                type="image/svg+xml"-->
        <!--                alt=""-->
        <!--            />-->
        <!--        </div>-->

        <!--        <div id="logo">-->
        <!--            <logo />-->
        <!--        </div>-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "~/components/Logo/Logo.vue";

export default defineComponent({
    components: {
        Logo
    }
});
</script>

<style scoped lang="scss">
@use "~/assets/styles/overrides.scss";
@use "bulma/sass/utilities/mixins.scss" as mixins;

.landing {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    background-image: url("~/assets/images/new/main-min.jpg");
    text-align: center;
    color: #fff;

    @include mixins.mobile {
        height: 60vh;
        margin-top: 40px;
        background-position-x: -180px; // tmp fix for that image
    }
}

#slogan {
    position: absolute;
    transform: rotate(-7deg);
    vertical-align: middle;

    width: calc(100vw * 0.22);
    height: calc(100vw * 0.22);

    top: calc(35% + calc(100vw * 0.2));
    left: calc(50vw + (calc(100vw * 0.22) / 1.2));

    @include mixins.mobile {
        width: calc(30vw);
        height: calc(30vw);
    }
}

#logo {
    position: absolute;

    filter: drop-shadow(0px 0px 5px #fff);
    vertical-align: middle;

    width: 25vw;
    height: 22vw;
    min-height: 210px;
    min-width: 210px;

    top: 15vw;
    left: 50%;
    transform: translateX(-50%);

    @include mixins.mobile {
        top: 15vh;
    }
}
#logo {
    position: absolute;

    filter: drop-shadow(0px 0px 5px #fff);
    vertical-align: middle;

    width: 25vw;
    height: 22vw;
    min-height: 210px;
    min-width: 210px;

    top: 15vw;
    left: 50%;
    transform: translateX(-50%);

    @include mixins.mobile {
        top: 15vh;
    }
}
</style>
