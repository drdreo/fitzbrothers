<template>
    <section class="section">
        <div class="container">

            <div class="columns">
                <div class="single-preview has-text-centered column is-12">
                    <h2 class="title has-text-weight-bold">New Single</h2>
                    <p class="subtitle is-6">OUT NOW</p>

                    <div class="columns">
                        <div class="column is-6 is-offset-3">
                            <figure class="image is-square">
                                <img v-lazy="require('~/assets/images/single_cover.jpg')" alt="Worth Your While cover"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <!--Musicvideo-->
            <figure class="image is-2by1">
                <iframe class="has-ratio" width="2100" height="890"
                        src="https://www.youtube-nocookie.com/embed/aHxVqtoO8R0?controls=0&showinfo=0&vq=hd1080&playsinline=1"
                        frameborder="0"></iframe>
            </figure>

            <section class="section cta">
                <!--                <a href="https://itunes.apple.com/at/album/worth-your-while-single/1448359692?app=itunes&ign-mpt=uo%3D4"-->
                <!--                   target="_blank" title="Buy on iTunes">-->
                <!--                    <img src="~assets/images/ctas/itunes.svg" alt="Buy on iTunes">-->
                <!--                </a>-->

                <!--                <a href="https://play.google.com/store/music/album/Worth_Your_While?id=Bxwbio52nvr5ghaxhxl3tcxvmua&hl=en_US"-->
                <!--                   target="_blank" title="Buy on GooglePlay">-->
                <!--                    <img src="~assets/images/ctas/google.svg" height="52px" alt="Buy on GooglePlay">-->
                <!--                </a>-->
                <!--                <a href="https://www.amazon.de/gp/product/B07MBFSQ6L?pf_rd_p=d12b27d6-0a90-4a73-9da3-4e84e7c49e87&pf_rd_r=8BXZ1TH326NDFNQQFQ9A&tag=ton08-20"-->
                <!--                   target="_blank" title="Buy on Amazon">-->
                <!--                    <img src="~assets/images/ctas/amazon.svg" alt="Buy on Amazon">-->
                <!--                </a>-->
                <a href="https://open.spotify.com/album/3J5hxRdhUpaCk3UfWfmPYB" target="_blank"
                   title="Buy on Spotify">
                    <img src="~assets/images/ctas/spotify.svg" alt="Listen on Spotify">
                </a>
                <!--                <a href="https://www.deezer.com/de/album/83299172" target="_blank"-->
                <!--                   title="Buy on Deezer">-->
                <!--                    <img src="~assets/images/ctas/deezer.svg" alt="Listen on Deezer">-->
                <!--                </a>-->
            </section>

            <section class="section  signup">

                <h5 class="title is-5">Sign up and get the latest updates</h5>


                <div id="sib_embed_signup" style="padding: 10px;">
                    <div class="forms-builder-wrapper"
                         style="position:relative;margin-left: auto;margin-right: auto;">
                        <input type="hidden" id="sib_embed_signup_lang" value="de">
                        <input type="hidden" id="sib_embed_invalid_email_message"
                               value="This is not a valid email!">
                        <input type="hidden" name="primary_type" id="primary_type" value="email">
                        <form class="description" id="theform" name="theform"
                              action="https://my.sendinblue.com/users/subscribeembed/js_id/2qci2/id/1"
                              onsubmit="return false;">
                            <input type="hidden" name="js_id" id="js_id" value="2qc69">
                            <input type="hidden" name="listid" id="listid" value="2">
                            <input type="hidden" name="from_url" id="from_url" value="yes">
                            <input type="hidden" name="hdn_email_txt" id="hdn_email_txt" value="">
                            <input type="hidden" name="req_hid" id="req_hid" value="" style="font-size: 13px;">


                            <div class="field has-addons has-addons-centered">

                                <div class="control input-control">
                                    <input type="text" class="input" name="email"
                                           @focus="subscriptionFocus"
                                           @blur="subscriptionBlur"
                                           id="email" value="" placeholder="Enter your Email...">
                                </div>
                                <div class="control">
                                    <button ref="sub_btn" type="submit" data-editfield="subscribe" name="subscribe"
                                            id="addonSubscribe" class="button is-gold">Sign Up
                                    </button>
                                </div>
                            </div>
                            <div ref="sub_hint" class="is-size-7 is-opaque-0" id="subscription-hint">
                                <small>We won't bother you. We won't spam you. We won't
                                    ruin your day with unnecessary information.
                                    <nuxt-link class="link" to="/termsandconditions">Terms & Conditions</nuxt-link>
                                </small>
                            </div>

                            <!--Message area-->
                            <div class="sib-container rounded">
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </section>

</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    head: {
      script: [{
        src: 'https://my.sendinblue.com/public/theme/version4/assets/js/src/subscribe-validate.js?v=1489660964',
        body: true
      }]
    }
  })
  export default class SinglePreview extends Vue {

    subscriptionFocus() {
      (this.$refs.sub_btn as HTMLElement).classList.add('focus');
      (this.$refs.sub_hint as HTMLElement).classList.remove('is-opaque-0');
    }

    subscriptionBlur() {
      (this.$refs.sub_btn as HTMLElement).classList.remove('focus');
      (this.$refs.sub_hint as HTMLElement).classList.add('is-opaque-0');
    }
  }
</script>

<style scoped src="./single-preview.scss" lang="scss">

</style>
