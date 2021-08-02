<template>
    <page-component isActive="contact">
        <section>
            <div class="max-w-7xl mx-auto">
                <div class="h-96 bg-gradient-to-bl from-blue-400 to-indigo-700 rounded">
                    <div class="pt-56 text-center text-white">
                        <h1 class="text-4xl">Contact</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-10">
            <div class="max-w-7xl mx-auto text-gray-700 px-4 lg:px-0">
                <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="col-span-2">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Naam</label>
                        <div class="mt-1">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                   class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                   required>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label for="company" class="block text-sm font-medium text-gray-700">Bedrijfsnaam</label>
                        <div class="mt-1">
                            <input type="text" name="company" id="company" autocomplete="organization"
                                   class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email"
                                   class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                   required>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label for="phone-number" class="block text-sm font-medium text-gray-700">Telefoonnummer</label>
                        <input type="text" name="phone-number" id="phone-number" autocomplete="tel"
                               class="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                               placeholder="+31 6 12 34 56 78" required>
                    </div>
                    <div class="col-span-2">
                        <label for="message" class="block text-sm font-medium text-gray-700">Bericht</label>
                        <textarea id="message" name="message" rows="4"
                                  class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                  required></textarea>
                    </div>
                    <div class="col-span-2">
                        <button type="submit"
                                class="w-full inline-flex items-center justify-center py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 rounded uppercase text-white shadow">
                            Verzenden
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <section class="bg-gray-100 py-10">
            <div class="max-w-7xl mx-auto text-gray-700 px-4 lg:px-0">

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
    }
}
</script>

<style scoped>

</style>
