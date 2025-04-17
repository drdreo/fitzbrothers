<template>
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
                >Terms & Conditions
              </NuxtLink>
            </small>
          </div>

          <!--Message area-->
          <div class="sib-container rounded"></div>
        </form>
      </div>
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
      (this.$refs.sub_hint as HTMLElement).classList.remove("is-opaque-0");
    },
    subscriptionBlur() {
      (this.$refs.sub_btn as HTMLElement).classList.remove("focus");
      (this.$refs.sub_hint as HTMLElement).classList.add("is-opaque-0");
    },
    onSignup() {
      fbq("trackCustom", "Sign Up");
    }
  }
});
</script>

<style scoped lang="scss">
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
