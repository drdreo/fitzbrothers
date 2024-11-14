<template>
    <div @click="onLogoClick">
        <svg
            ref="logo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-200 -200 400 400"
            id="logo_svg">
            <defs>
                <filter
                    id="glow"
                    height="300%"
                    width="300%"
                    x="-75%"
                    y="-75%">
                    <feMorphology
                        operator="erode"
                        radius="1"
                        in="SourceAlpha"
                        result="dilated"></feMorphology>
                    <feGaussianBlur
                        in="dilated"
                        stdDeviation="15"
                        color-interpolation-filters="sRGB"
                        color-rendering="optimizeSpeed"
                        result="blurred"></feGaussianBlur>
                    <feFlood
                        flood-color="white"
                        result="flooded">
                        <animate
                            attributeName="flood-color"
                            name="myanim"
                            begin="indefinite"
                            dur="1.5s"
                            calcMode="spline"
                            values="white;rgba(255,255,255,0.35)"
                            keySplines="0.5,0,0.3,1"
                            fill="freeze"></animate>
                    </feFlood>
                    <feComposite
                        in="flooded"
                        in2="blurred"
                        operator="in"
                        result="composed"></feComposite>
                    <feMerge>
                        <feMergeNode in="composed"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <g
                ref="fitzLogo"
                id="fitz-logo"
                filter="url(#glow)"
                style="visibility: hidden">
                <animate
                    id="opacityAnim"
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur="1s"
                    begin="indefinite"></animate>
                <animateTransform
                    name="myanim"
                    begin="indefinite"
                    attributeName="transform"
                    type="scale"
                    additive="sum"
                    dur="1.5s"
                    calcMode="spline"
                    values="1.2;1"
                    keySplines="0.3,0,0,1"></animateTransform>
                <g
                    id="stroked"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="square"
                    fill="none">
                    <circle r="142.5">
                        <set
                            attributeName="stroke-dasharray"
                            to="895.353906273"
                            dur="1.5s"></set>
                        <animate
                            name="myanim"
                            begin="indefinite"
                            attributeName="stroke-dashoffset"
                            dur="1.5s"
                            calcMode="spline"
                            values="895.353906273;0"
                            keySplines="0.333,0,0.222,1"></animate>
                        <animateTransform
                            name="myanim"
                            begin="indefinite"
                            attributeName="transform"
                            type="rotate"
                            dur="1.5s"
                            calcMode="spline"
                            values="-90 0 0;-270 0 0"
                            keySplines="0.333,0,0.222,1"></animateTransform>
                    </circle>
                    <path
                        id="z"
                        d="m -76 -77 h 134 l -116 154 h 134">
                        <set
                            attributeName="visibility"
                            to="hidden"
                            dur="0.2s"></set>
                        <animate
                            name="myanim"
                            begin="indefinite"
                            attributeName="d"
                            dur="1.3s"
                            calcMode="spline"
                            values="M-76,-77 h0 l0,0 h0;M-76,-77 h134 l0,0 h0;M-76,-77 h134 l-116,154 h0;M-76,-77 h134 l-116,154 h134"
                            keySplines="0,0,1,0;0,0,1,1;0,1,1,1"
                            keyTimes="0;0.15;0.3;1"></animate>
                    </path>
                </g>
                <g
                    id="filled"
                    fill="white">
                    <g id="vertical">
                        <set
                            attributeName="visibility"
                            to="hidden"
                            dur="0.4s"></set>
                        <path
                            id="vertical-top"
                            d="M -2 -73 L 2 -73 L 2 -9.3 L -2 -4 Z">
                            <animate
                                name="myanim"
                                begin="indefinite"
                                attributeName="d"
                                dur="0.2s"
                                from="M-2,-73L2,-73L2,-73-2,-73z"
                                to="M-2,-73L2,-73L2,-4L-2,-4z"></animate>
                        </path>
                        <path
                            id="vertical-bottom"
                            d="M 2 73 L -2 73 L -2 9.3 L 2 4 Z">
                            <animate
                                name="myanim"
                                begin="indefinite"
                                attributeName="d"
                                dur="0.2s"
                                from="M2,73L-2,73L-2,73L2,73z"
                                to="M2,73L-2,73L-2,4L2,4z"></animate>
                        </path>
                    </g>
                    <g id="horizontal">
                        <set
                            attributeName="visibility"
                            to="hidden"
                            dur="0.6s"></set>
                        <path
                            id="horizontal-left"
                            d="M -3.5 -2 L -6.5 2 L -35 2 L -35 -2 Z">
                            <animate
                                name="myanim"
                                begin="indefinite"
                                attributeName="d"
                                dur="0.9s"
                                calcMode="spline"
                                values="M-3.5,-2L-6.5,2L-6.5,2L-6.2,-2z;M-3.5,-2L-6.5,2L-35,2L-35,-2z"
                                keySplines="0,0.25,0,1"></animate>
                        </path>
                        <path
                            id="horizontal-right"
                            d="M 3.5 2 L 6.5 -2 L 35 -2 L 35 2 Z">
                            <animate
                                name="myanim"
                                begin="indefinite"
                                attributeName="d"
                                dur="0.9s"
                                calcMode="spline"
                                values="M3.5,2L6.5,-2L6.5,-2L6.5,2z;M3.5,2L6.5,-2L35,-2L35,2z"
                                keySplines="0,0.25,0,1"></animate>
                        </path>
                    </g>
                </g>
            </g>
        </svg>
        <audio ref="logoAudio">
            <source
                src="~assets/audio/cloud_scream.mp3"
                type="audio/mp3" />
        </audio>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

declare const fbq: Function;

interface SVGElement extends HTMLElement {
    beginElement(): SVGElement;
}

export default defineComponent({
    mounted() {
        this.startAnimation();
    },
    methods: {
        startAnimation() {
            setTimeout(() => {
                const logo = this.$refs.fitzLogo as HTMLElement;
                const animations = document.getElementsByName(
                    "myanim"
                ) as NodeListOf<SVGElement>;

                logo.style.visibility = "visible";

                for (let i = 0; i < animations.length; i++) {
                    animations[i].beginElement();
                }
            }, 650);
        },
        onLogoClick() {
            // const audio = this.$refs.logoAudio as HTMLAudioElement
            // const logo = this.$refs.fitzLogo as HTMLElement
            //
            // logo.classList.add('rotate')
            // audio.play()
            // audio.onended = () => {
            //     logo.classList.remove('rotate')
            // }

            // track for FB
            fbq("trackCustom", "LogoSpin");
        }
    }
});
</script>

<style scoped lang="scss">
@keyframes appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

#logo_svg {
    cursor: pointer;
}

.rotate {
    animation: rotation 4s linear;
}

@keyframes rotation {
    to {
        transform: rotate(180deg);
    }
}
</style>
