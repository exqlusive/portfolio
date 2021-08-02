<template>
    <inertia-link
        :href="href"
        class="py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow">
        <slot /></inertia-link>
</template>

<script>
export default {
    name: "AnchorComponent",
    props: ['href'],
}
</script>

<style scoped>

</style>
