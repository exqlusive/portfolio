<template>
    <page-component isActive="curriculum-vitae">
        <section>
            <div class="max-w-7xl mx-auto">
                <div class="h-96 bg-gradient-to-bl from-blue-400 to-indigo-700 rounded">
                    <div class="pt-56 text-center text-white">
                        <h1 class="text-4xl">CURRICULUM VITAE</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-10">
            <div class="max-w-7xl mx-auto text-gray-700 px-4 lg:px-0 overflow-x-auto">

                <h2 class="text-2xl font-semibold text-black py-4">Opleiding</h2>

                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col"
                            class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Datum
                        </th>
                        <th scope="col"
                            class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Onderdeel
                        </th>
                        <th scope="col"
                            class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Diploma
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="education in resume.educations" :key="education.id">
                            <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {{ education.start_end }}
                            </td>
                            <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span class="font-bold">{{ education.subject }}</span>, {{ education.location }}
                                <p v-html="education.description"></p>
                            </td>
                            <td class="px-2 py-4 whitespace-nowrap text-sm">
                                <span v-if="education.has_diploma"
                                      class="px-4 py-2 bg-green-500 text-green-800 rounded">Behaald</span>
                                <span v-else class="px-4 py-2 bg-gray-300 text-gray-800 rounded">Niet Behaald</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="bg-gray-100 py-10">
            <div class="max-w-7xl mx-auto text-gray-700 px-4 lg:px-0 overflow-x-auto">
                <h2 class="text-2xl font-semibold text-black py-4">Werkervaring</h2>

                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col"
                            class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Datum
                        </th>
                        <th scope="col"
                            class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Functie
                        </th>
                        <th scope="col"
                            class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Locatie
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-gray-100 divide-y divide-gray-200">
                        <tr v-for="workExperience in resume.workExperiences" :key="workExperience.id">
                            <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {{ workExperience.start_end }}
                            </td>
                            <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ workExperience.function }}
                            </td>
                            <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ workExperience.location }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="py-10">
            <div class="max-w-7xl mx-auto text-gray-700 px-4 lg:px-0">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 class="text-2xl font-semibold text-black pt-4">Talenkennis</h2>

                        <div class="relative py-1" v-for="language in resume.languages" :key="resume.id">
                            {{ language.language }}
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded" :class="language.bg_color">
                                <div
                                    :style="`width: ${language.percentage}%;`"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap justify-center"
                                    :class="language.fg_color"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-black pt-4">Overige</h2>
                        <ul class="mt-1">
                            <li v-for="other in resume.others" :key="other.id">
                                <i class="fa-solid fa-circle-check text-green-600"></i> {{ other.description }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-10 bg-gray-100">
            <div class="max-w-7xl mx-auto text-gray-700 px-4 lg:px-0">
                <h2 class="text-2xl font-semibold text-black pt-4 mb-1">Skills</h2>
                <p class="mb-2">
                    Ik heb gewerkt met de volgende software;
                </p>
                <div class="grid grid-cols-12 gap-4 text-3xl text-center">
                    <div v-for="skill in resume.skills" :key="skill.id" v-html="skill.icon">
                    </div>
                </div>
            </div>
        </section>
    </page-component>
</template>
<script>
import PageComponent from "../Components/PageComponent";

export default {
    name: "Contact",
    components: {
        PageComponent
    },
    data() {
        return {
            resume: []
        }
    },
    methods: {
        getResume() {
            axios.get('/api/resume')
            .then(res => {
                this.resume = res.data
                console.log(res.data)
            })
        }
    },
    created() {
        this.getResume()
    }
}
</script>

<style scoped>

</style>
