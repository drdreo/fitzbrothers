<template>
    <nav
        id="mainNav"
        class="navbar is-fixed-top"
        :class="{ 'is-on-landing': onLanding }">
        <!-- Brand and toggle get grouped for better mobile display -->

        <div class="navbar-brand">
            <Logo id="logo" />

            <a
                class="navbar-item bandname"
                style="opacity: 0"
                v-reveal="330"
                href="#page-top"
                >FITZ BROTHERS</a
            >

            <div
                class="navbar-burger burger"
                data-target="navbarMenu"
                @click="toggleMenu"
                :class="{ 'is-active': menuOpen }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>

        <div
            id="navbarMenu"
            class="navbar-menu"
            :class="{ 'is-active': menuOpen }">
            <div class="navbar-end">
                <!--                <a class="page-scroll navbar-item" v-reveal="553" style="opacity:0;"-->
                <!--                   href="#upcoming-dates">Dates</a>-->
                <a
                    class="page-scroll navbar-item"
                    v-reveal="820"
                    href="#mission"
                    style="opacity: 0">
                    Mission
                </a>
                <a
                    class="page-scroll navbar-item"
                    v-reveal="920"
                    style="opacity: 0"
                    href="#photos"
                    >Photos</a
                >

                <a
                    class="page-scroll navbar-item"
                    v-reveal="1000"
                    style="opacity: 0"
                    href="#contact">
                    Contact
                </a>

                <NuxtLink to="/epk"  class="page-scroll navbar-item"
                          v-reveal="1000"
                          style="opacity: 0">EPK</NuxtLink>


            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Logo from "@/components/Logo/Logo.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    components: {
        Logo
    },
    setup() {
        const onLanding = ref(true);
        const menuOpen = ref(false);

        const handleScroll = () => {
            onLanding.value = window.scrollY + 50 < window.innerHeight;
        };

        const toggleMenu = () => {
            menuOpen.value = !menuOpen.value;
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        // expose to template and other options API hooks
        return {
            onLanding,
            menuOpen,
            toggleMenu
        };
    }
});
</script>

<style lang="scss">
@use "~/assets/styles/overrides";
@use "bulma/sass/utilities/mixins" as mixins;
@use "bulma/sass/utilities/initial-variables" as bulmaVars;

#logo {
    filter: drop-shadow(0px 0px 5px #fff);
    vertical-align: middle;

    width: 50px;
    height: 50px;
    min-height: 50px;
    min-width: 50px;
}

.navbar {
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.15);
    font-family: FitzBrothers, "Helvetica Neue", Arial, serif;

    transition: background-color 0.15s ease;

    &-item {
        transition: all 0.35s ease;
        padding-bottom: 1rem;
    }

    .bandname {
        font-size: 18px;
        line-height: 18px;
    }

    @include mixins.tablet {
        .bandname {
            font-size: 14px;
            line-height: 14px;
        }
    }

    &.is-on-landing {
        box-shadow: unset;

        .bandname {
            font-size: 18px;
        }

        @include mixins.tablet {
            background-color: transparent;
            .navbar-item {
                color: #ffffffb3;
                background-color: transparent;

                &.is-active,
                &:hover {
                    color: bulmaVars.$white;
                }
            }
        }
    }
}
</style>
