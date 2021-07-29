<template>
    <header-component></header-component>
    <main>
        <slot />
    </main>
    <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default {
    name: "HomeComponent",
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>

</style>
