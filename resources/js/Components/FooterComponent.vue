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
                    <anchor-component href="/contact">Ik lust wel een koffie</anchor-component>
                </p>
            </div>

            <div class="hidden md:block lg:col-start-3">
                <img src="images/coffee_drinking_man.png" alt="man met computer">
            </div>
        </div>
    </section>

    <section class="bg-gray-900 py-10 lg:py-20 text-gray-300 text-sm">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-5 px-4 lg:px-0 gap-8">
                <div class="col-span-5 lg:col-span-2">
                    <inertia-link href="/"><img src="images/logo.png" alt="logo"></inertia-link>
                    <p class="pt-3">
                        Noord-Brabant, Nederland
                    </p>
                </div>
                <div class="col-span-5 lg:col-span-3">
                    <p>
                        Wist je dat; Deze website op een VPS draait bij TransIP, met het OS: CentOS 7,gehost wordt via Plesk en tot slot gebruik maakt van Cloudflare!
                    </p>
                </div>
            </div>
            <div class="text-center">&copy; 2021. Wesley Hiraki</div>
        </div>
    </section>
</template>

<script>
import AnchorComponent from "./AnchorComponent";

export default {
    name: "FooterComponent",
    components: {
        AnchorComponent
    }
}
</script>

<style scoped>

</style>
