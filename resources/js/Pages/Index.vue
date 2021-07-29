<template>
    <home-component>
        <header>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 lg:col-span-4 text-center lg:text-right">
                        <h1
                            class="text-white break-all text-2xl lg:text-6xl lg:mt-64">Wesley
                            <span
                                class="inline-block lg:block">Hiraki</span></h1>
                        <div class="mt-3">
                            <a
                                href="https://github.com/exqlusive/portfolio"
                                class="px-4 py-2 bg-green-500 text-xs text-white rounded hover:bg-green-700 transition-all ease-in-out">{{ trans('general.check_out_code') }}</a>
                        </div>
                    </div>
                    <div class="col-span-4">
                        <img src="/images/selfportret.png" alt="self">
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:mt-44">
                        <h2 class="title font-extralight pb-5">{{ trans('general.job.title') }}</h2>
                        <p class="subtitle">
                            {{ trans('general.subtitle') }}
                        </p>
                        <p class="text-gray-300 pb-4">
                            {{ trans('general.job.description') }}
                        </p>
                        <ul class="text-orange text-sm space-y-2">
                            <li>
                                <i class="fa-solid fa-phone-office mr-2"></i>
                                <a href="tel:0031615585990">+31 6 1558 5990</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-mailbox mr-2"></i>
                                <a href="mailto:contact@wesleyhiraki.nl">contact@wesleyhiraki.nl</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="max-w-7xl mx-auto py-10">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 lg:col-start-1 lg:col-end-5">
                        <h2 class="title font-extralight pb-5">{{ trans('general.about.me') }}</h2>
                        <p class="subtitle">
                            {{ trans('general.about.subtitle') }}
                        </p>
                        <p class="text-gray-300 pb-4 text-sm">
                            {{ trans('general.about.description') }}
                        </p>

                        <div class="flex items-center my-4">
                            <div class="inline-block mr-4 text-orange">
                                <span class="text-4xl font-bold">11</span>
                            </div>
                            <div class="inline-block text-white text-lg leading-snug">
                                <span class="block">{{ trans('general.years') }} {{ trans('general.of') }}</span>
                                <span class="block">{{ trans('general.experience') }}</span>
                            </div>
                        </div>
                        <span
                            class="block text-gray-500 text-xs">1 {{ trans('general.year_of_work_experience') }}</span>
                        <div class="mt-4">
                            <a href="https://github.com/exqlusive" target="_blank" class="mr-3">
                                <i
                                    class="fab fa-github text-2xl text-orange hover:text-white transition-colors ease-in-out"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/wesleyhiraki/" target="_blank">
                                <i
                                    class="fab fa-linkedin-in text-2xl text-orange hover:text-white transition-colors ease-in-out"></i>
                            </a>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-start-7 lg:col-end-12">
                        <h2 class="title font-extralight pb-5">{{ trans('general.contact.me') }}</h2>
                        <p class="subtitle">
                            <i class="fa-solid fa-mug-hot"></i> {{ trans('general.contact.subtitle') }}
                        </p>
                        <p class="text-gray-300 pb-4 text-sm">
                            {{ trans('general.contact.description') }}
                        </p>

                        <a href="mailto:contact@wesleyhiraki.nl" class="text-xl text-orange hover:text-white font-bold">contact@wesleyhiraki.nl <i class="fa-solid fa-arrow-right-long ml-3 animate-pulse"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </home-component>
</template>

<script>
import HomeComponent from "../Layout/HomeComponent";
export default {
    name: "Index",
    components: {HomeComponent}
}
</script>

<style scoped>

</style>
