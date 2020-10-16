<template>
    <section class="fixed h-32 w-full bottom-0 bg-gray-900 shadow-2x">
        <nav>
            <ul class="flex justify-center">
                <li v-for="(link, i) of links" :key="`nav-link-${i}`" class="py-4">
                    <router-link
                        :to="{ name: link.page }"
                        class="p-4 border-gray-900 transition-all duration-200 ease-in-out"
                        >{{ link.name }}</router-link
                    >
                </li>
            </ul>
        </nav>
        <section class="absolute bottom-0 right-0 p-4 flex flex-col items-end justify-end">
            <song-quote></song-quote>
            <p>&copy; {{ currentYear }} PolarizedIons</p>
        </section>
    </section>
</template>

<script>
import SongQuote from '@/components/SongQuote.vue';

export default {
    data() {
        return {
            links: [
                {
                    name: 'About',
                    page: 'about',
                },
                {
                    name: 'Skillset',
                    page: 'skills',
                },
                {
                    name: 'Socials',
                    page: 'socials',
                },
            ],
        };
    },
    components: {
        SongQuote,
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style scoped>
.router-link-exact-active {
    background: theme('colors.green.600');
    border-color: theme('colors.green.800');
    border-bottom-width: theme('borderWidth.4');
}
</style>
