<template>
    <page-component isActive="home">
        <div class="px-4 lg:px-0">
            <section class="banner">
                <div class="max-w-7xl mx-auto grid grid-cols-3 gap-4 py-32 lg:py-40 lg:pt-72 relative">
                    <div class="col-span-3 lg:col-span-2">
                        <p class="title mb-5">
                            Hallo
                        </p>
                        <h1 class="mb-5">Ik ben <span class="inline-block lg:block">Wesley Hiraki</span></h1>
                        <p class="subtitle mb-8">
                            Software developer
                        </p>
                        <inertia-link
                            href="curriculum-vitae"
                            class="py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow">Mijn CV</inertia-link>
                    </div>

                    <div class="hidden lg:block col-span-1">
                        <img src="images/selfportret.png" alt="self portret">
                    </div>
                </div>
            </section>

            <section class="bg-gray-100">
                <div class="max-w-7xl mx-auto grid grid-cols-3 gap-4 py-10 lg:py-40">
                    <div class="hidden md:block">
                        <img src="images/voorstellen.png" alt="man met computer">
                    </div>
                    <div class="col-span-3 md:col-start-2 xl:col-start-3">
                        <p class="subtitle">
                            Laat ik mezelf even voorstellen
                        </p>

                        <p class="py-4 text-gray-600">
                            Ik ben een klantgericht en vriendelijke jongeman met een passie voor programmeren en het visualiseren, creatieve
                            oplossingen maken staat hierin centraal. Verder ben ik een flexibele werker die niet bang is voor het
                            onbekende.
                        </p>

                        <p class="text-gray-600">
                            Met name heb ik ervaring opgedaan d.m.v. scholing en zelfstudie in PHP, HTML, CSS en Javascript
                            en frameworks zoals Laravel, VueJS, NuxtJS.
                        </p>

                        <p class="pt-10">
                            <inertia-link
                                href="/curriculum-vitae"
                                class="py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow">Bekijk Mijn CV</inertia-link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </page-component>
</template>
<script>
import PageComponent from "../Components/PageComponent";

export default {
    name: "Index",
    components: {
        PageComponent
    }
}
</script>

<style scoped>

</style>
