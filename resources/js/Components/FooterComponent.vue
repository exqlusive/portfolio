<template>
    <section class="px-4 lg:px-0">
        <div class="max-w-7xl mx-auto grid grid-cols-3 gap-4 py-20 lg:py-40">
            <div class="col-span-3 md:col-span-2 xl:col-span-1">
                <p class="subtitle">
                    Bakje pleur?
                </p>

                <p class="py-4 text-gray-600">
                    Ik drink mijn koffie graag met melk en suiker - Nog steeds geïnteresseerd? Zullen we eens
                    aan tafel gaan zitten onder het genot van een bakje koffie!?
                </p>

                <p class="pb-4 text-gray-600">
                    <inertia-link href="/curriculum-vitae" class="text-sm text-gray-300 hover:text-gray-500">Nog niet overtuigd? Neem dan een kijkje op mijn CV</inertia-link>
                </p>

                <p class="pt-4">
                    <inertia-link
                        href="/contact"
                        class="py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow">Ik lust wel een koffie</inertia-link>
                </p>
            </div>

            <div class="hidden md:block lg:col-start-3">
                <img src="images/coffee_drinking_man.png" alt="man met computer">
            </div>
        </div>
    </section>

    <section class="bg-gray-900 py-10 lg:py-20 text-gray-300 text-sm">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-5 px-4 lg:px-0">
                <div class="col-span-5 lg:col-span-2">
                    <inertia-link href="/"><img src="images/logo.png" alt="logo"></inertia-link>
                    <p class="pt-3">
                        Noord-Brabant, Nederland
                    </p>
                </div>
            </div>
            <div class="text-center">&copy; 2021. Wesley Hiraki</div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped>

</style>
