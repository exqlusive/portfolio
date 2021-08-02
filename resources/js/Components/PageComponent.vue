<template>
    <header class="shadow w-full">
        <nav class="max-w-7xl mx-auto">
            <div class="flex m-auto">
                <div class="pt-7">
                    <inertia-link href="/"><img src="images/logo.png" alt="logo"></inertia-link>
                </div>

                <inertia-link class="nav" :class="active.home" href="/">Home</inertia-link>
                <inertia-link class="nav" :class="active.about" href="/about">Over</inertia-link>
                <inertia-link class="nav" :class="active.curriculum_vitae" href="/curriculum-vitae">CV</inertia-link>
                <inertia-link class="nav" :class="active.contact" href="/contact">Contact</inertia-link>
            </div>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer-component />
</template>

<script>
import FooterComponent from "./FooterComponent";

export default {
    name: "PageComponent",
    components: {
        FooterComponent
    },
    props: ['isActive'],
    data() {
        return {
            active: {
                home: false,
                about: false,
                curriculum_vitae: false,
                contact: false
            }
        }
    },
    methods: {
        getActiveState() {
            this.active.home = false
            this.active.about = false
            this.active.curriculum_vitae = false
            this.active.contact = false

            if (this.isActive === 'home') {
                this.active.home = 'active'
            }

            if (this.isActive === 'about') {
                this.active.about = 'active'
            }

            if (this.isActive === 'curriculum-vitae') {
                this.active.curriculum_vitae = 'active'
            }

            if (this.isActive === 'contact') {
                this.active.contact = 'active'
            }
        }
    },
    created() {
        this.getActiveState()
    }
}
</script>

<style scoped>

</style>
