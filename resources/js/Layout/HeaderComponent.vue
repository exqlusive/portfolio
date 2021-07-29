<template>
    <nav class="nav">
        <div class="max-w-7xl mx-auto">
            <ul class="flex">
                <li><inertia-link href="/">Home</inertia-link></li>
                <li><inertia-link href="/about">About</inertia-link></li>
                <li><inertia-link href="/skills">Skills</inertia-link></li>
                <li><inertia-link href="/journey">Journey</inertia-link></li>
                <li><inertia-link href="/contact">Contact</inertia-link></li>
                <li class="mr-3"><a href="/nl"><img class="flag" src="images/netherlands.png" alt="flag_nl"></a></li>
                <li><a href="/en"><img class="flag" src="images/united-states.png" alt="flag_us"></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>

</style>
