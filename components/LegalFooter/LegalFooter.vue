<template>
    <footer class="footer">
        <p class="is-size-7">
            <span>Fitz Brothers</span>
            <span class="seperator">|</span>
            <NuxtLink
                class="link"
                to="/termsandconditions"
                >Terms & Conditions / Data Privacy</NuxtLink
            >
        </p>
    </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
@use "~/assets/styles/overrides" as vars;

.footer {
    margin: 15px;
    display: flex;
    justify-content: flex-end;
}

.seperator {
    color: #dedede;
    padding-left: 5px;
    padding-right: 5px;
}

.link {
    color: vars.$gold;

    &:hover {
        text-decoration: underline;
    }
}
</style>
