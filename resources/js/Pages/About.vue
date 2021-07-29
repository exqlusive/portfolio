<template>
    <page-component>
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                    <h1 class="subtitle normal-case">
                        new User('Wesley', 'The Netherlands');
                    </h1>

                    <p class="text-gray-200">Hello there! My name is Wesley and I from The Netherlands.</p>

                    <p class="text-gray-200 py-4">
                        Since 2008 I have started to shown interest in the development of web applications. In 2009 I started
                        an course in IT & Application development. The course did not offer me enough excitement - and
                        did not meet my expectations. In 2012 I dropped out and started to work full-time in the catering industry.
                    </p>

                    <p class="text-gray-200 py-4">
                        During that time I have never lost my interest in web development. In my off hours I was usually
                        reading documentation of programming languages & frameworks and applied these too. The one that
                        really stuck out is Laravel.
                    </p>

                    <p class="text-gray-200 py-4">
                        After working full-time in the catering industry for 4 years I decided to change industries. At
                        that time the game PLAYERUNKNOWN'S BATTLEGROUND came out on PC in early access. I enjoyed playing
                        this game a lot with my friends. When they announced that people were able to gain access to Custom Games
                        (Ability to modify match settings) I did not hesitate and signed myself up.
                    </p>

                    <p class="text-gray-200 py-4">
                        To start a match you need a lot of people to join. That's when I decided to start streaming on Twitch!
                        This gave other people the ability to join my matches, plus that I was able to interact with them through
                        the streams.
                    </p>

                    <p class="text-gray-200 py-4">
                        This was still not it. I enjoyed it a lot but could not resist my feeling to become an actual programmer.
                        Since I had not graduated and had not a portfolio of my self made/thought projects I could not find
                        a suitable job in the industry. That's why I decided in June 2017 to apply once again for the same course as in 2009.
                    </p>

                    <p class="text-gray-200 py-4">
                        So, we're back at school! Luckily I had a teacher that understood that I needed excitement and helped me
                        throughout the course and that the basics were already known to me.
                    </p>

                    <p class="text-gray-200 py-4">
                        In 2020 I graduated and started to work full time as Project Manager with aside junior Software Developer.
                        After being employed for a year we have decided to go other directions. I was unable to show my full
                        potential as developer and lost excitement.
                    </p>

                    <inertia-link href="/journey">
                        <span class="text-orange hover:text-white">Click here for a list feed of my journey</span>
                    </inertia-link>
                </div>
                <div>
                    <img src="images/userclass.png" alt="image">
                </div>
            </div>
        </div>
    </page-component>
</template>

<script>
import PageComponent from "../Layout/PageComponent";

export default {
    name: "About",
    components: {
        PageComponent
    }
}
</script>

<style scoped>

</style>
