<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="single-preview has-text-centered column is-12">
                    <h2 class="title has-text-weight-bold">New Single</h2>
                    <p class="subtitle is-6 is-uppercase">{{ displayDate }}</p>

                    <div class="columns">
                        <div class="column is-6 is-offset-3">
                            <figure class="image is-square">
                                <img
                                    src="~assets/images/single_cover.jpg"
                                    alt="Single Cover" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <hr style="margin-bottom: 2.5rem; margin-top: 2rem" />

            <!--Musicvideo-->
            <figure class="image is-2by1">
                <iframe
                    class="has-ratio"
                    width="2100"
                    height="890"
                    src="https://www.youtube-nocookie.com/embed/h_iDgBmaRjE?controls=0&showinfo=0&vq=hd1080&playsinline=1"></iframe>
            </figure>

            <section class="section cta">
                <a
                    href="https://music.apple.com/at/artist/fitz-brothers/1506988785?l=en"
                    target="_blank"
                    title="Listen on iTunes">
                    <img
                        src="~/assets/images/ctas/itunes.svg"
                        alt="Listen on iTunes" />
                </a>
                <!--                <a-->
                <!--                    href="https://play.google.com/store/music/artist/Fitz_Brothers?id=A3eookbyrzsy4o42xsyaqklb3rm"-->
                <!--                    target="_blank"-->
                <!--                    title="Listen on GooglePlay">-->
                <!--                    <img-->
                <!--                        class="google-cta"-->
                <!--                        src="~/assets/images/ctas/google.svg"-->
                <!--                        alt="Listen on GooglePlay" />-->
                <!--                </a>-->
                <a
                    href="https://music.amazon.de/artists/B086ZK8XMM?ref=dm_sh_Glqu3oCByvvDwcLMmlrqFJFsG"
                    target="_blank"
                    title="Listen on Amazon">
                    <img
                        src="~assets/images/ctas/amazon.svg"
                        alt="Listen on Amazon" />
                </a>
                <a
                    href="https://open.spotify.com/artist/5fZMIiZ4K0VMfi4Ebo6M71?si=ZeduSPMbRJSGm3_ehCaTyQ"
                    target="_blank"
                    title="Listen on Spotify">
                    <img
                        src="~assets/images/ctas/spotify.svg"
                        alt="Listen on Spotify" />
                </a>
                <a
                    href="https://www.deezer.com/artist/91013882?utm_source=deezer&utm_content=artist-91013882&utm_term=1720846922_1587904265&utm_medium=web"
                    target="_blank"
                    title="Listen on Deezer">
                    <img
                        src="~assets/images/ctas/deezer.svg"
                        alt="Listen on Deezer" />
                </a>
                <a
                    href="https://soundcloud.com/fitzbrothers"
                    target="_blank"
                    title="Listen on Soundcloud">
                    <img
                        class="soundcloud-cta"
                        src="~assets/images/ctas/soundcloud.png"
                        alt="Listen on Soundcloud" />
                </a>
            </section>

            <section class="section signup">
                <h5 class="title is-5">Sign up and get the latest updates</h5>

                <div
                    id="sib_embed_signup"
                    style="padding: 10px">
                    <div
                        class="forms-builder-wrapper"
                        style="
                            position: relative;
                            margin-left: auto;
                            margin-right: auto;
                        ">
                        <input
                            type="hidden"
                            id="sib_embed_signup_lang"
                            value="de" />
                        <input
                            type="hidden"
                            id="sib_embed_invalid_email_message"
                            value="This is not a valid email!" />
                        <input
                            type="hidden"
                            name="primary_type"
                            id="primary_type"
                            value="email" />
                        <form
                            class="description"
                            id="theform"
                            name="theform"
                            action="https://my.sendinblue.com/users/subscribeembed/js_id/2qci2/id/1"
                            onsubmit="return false;">
                            <input
                                type="hidden"
                                name="js_id"
                                id="js_id"
                                value="2qc69" />
                            <input
                                type="hidden"
                                name="listid"
                                id="listid"
                                value="2" />
                            <input
                                type="hidden"
                                name="from_url"
                                id="from_url"
                                value="yes" />
                            <input
                                type="hidden"
                                name="hdn_email_txt"
                                id="hdn_email_txt"
                                value="" />
                            <input
                                type="hidden"
                                name="req_hid"
                                id="req_hid"
                                value=""
                                style="font-size: 13px" />

                            <div class="field has-addons has-addons-centered">
                                <div class="control input-control">
                                    <input
                                        type="text"
                                        class="input"
                                        name="email"
                                        @focus="subscriptionFocus"
                                        @blur="subscriptionBlur"
                                        id="email"
                                        value=""
                                        placeholder="Enter your Email..." />
                                </div>
                                <div class="control">
                                    <button
                                        ref="sub_btn"
                                        type="submit"
                                        data-editfield="subscribe"
                                        name="subscribe"
                                        @click="onSignup"
                                        id="addonSubscribe"
                                        class="button is-gold">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <div
                                ref="sub_hint"
                                class="is-size-7 is-opaque-0"
                                id="subscription-hint">
                                <small
                                    >We won't bother you. We won't spam you. We
                                    won't ruin your day with unnecessary
                                    information.
                                    <NuxtLink
                                        class="link"
                                        to="/termsandconditions"
                                        >Terms & Conditions</NuxtLink
                                    >
                                </small>
                            </div>

                            <!--Message area-->
                            <div class="sib-container rounded"></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

declare const fbq: Function;

export default defineComponent({
    mounted() {
        const script = document.createElement("script");
        script.src =
            "https://my.sendinblue.com/public/theme/version4/assets/js/src/subscribe-validate.js?v=1489660964";
        script.async = true;
        document.body.appendChild(script);
    },
    methods: {
        subscriptionFocus() {
            (this.$refs.sub_btn as HTMLElement).classList.add("focus");
            (this.$refs.sub_hint as HTMLElement).classList.remove(
                "is-opaque-0"
            );
        },
        subscriptionBlur() {
            (this.$refs.sub_btn as HTMLElement).classList.remove("focus");
            (this.$refs.sub_hint as HTMLElement).classList.add("is-opaque-0");
        },
        onSignup() {
            fbq("trackCustom", "Sign Up");
        }
    },
    data() {
        return {
            currentDate: new Date(),
            targetDate: new Date("September 13, 2024")
        };
    },
    computed: {
        displayDate() {
            if (this.currentDate > this.targetDate) {
                return "Out now";
            } else {
                // Format the target date according to your requirements
                return this.targetDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                });
            }
        }
    }
});
</script>

<style scoped lang="scss">
.cta {
    text-align: center;

    img {
        width: 150px;
    }

    .google-cta {
        width: auto;
        height: 53px;
    }

    .soundcloud-cta {
        width: auto;
        height: 53px;
    }
}

.signup {
    padding: 0;
    text-align: center;

    .input-control {
        width: 100%;
        max-width: 500px;

        .input {
            outline: 0;
            border: 1px solid #ccc;

            &:focus {
                box-shadow:
                    inset 0 1px 1px rgba(0, 0, 0, 0.075),
                    0 0 8px #daa520 !important;
            }
        }
    }

    .button {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;

        &.focus {
            box-shadow:
                inset 0 1px 1px rgba(0, 0, 0, 0.075),
                0 0 8px #daa520 !important;
            outline: none;
        }

        &:active,
        &:hover,
        &:focus {
            outline-color: #daa520 !important;
            box-shadow:
                inset 0 1px 1px rgba(0, 0, 0, 0.075),
                0 0 8px #daa520 !important;
        }
    }

    #subscription-hint {
        transition: all 0.3s ease;

        .link {
            color: #daa520;
        }
    }
}
</style>
