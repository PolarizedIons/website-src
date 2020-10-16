<template>
    <div class="p-4">
        <img src="https://twitter-avatar.now.sh/polarizedions" class="rounded-full m-4 shadow-lg mx-auto" />
        <div class="h-full flex flex-wrap justify-center items-center lg:w-3/4 mx-auto">
            <a
                v-for="(social, i) of socials"
                :key="`social-${i}`"
                :href="social.link"
                @click="(e) => social.link || e.preventDefault()"
                class="px-4 py-2 m-4 bg-green-600 rounded-md border-green-900 border-b-8 shadow-lg text-center transition-all ease-in-out duration-200 hover:bg-green-700 hover:border-b-4 hover:mt-5 w-full md:w-auto"
                :class="social.link ? 'cursor-pointer' : 'cursor-default'"
                target="_blank"
            >
                <div class="text-2xl">{{ social.name }}</div>
                <div class="italic text-sm">{{ social.username }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Socials',
    data() {
        return {
            socials: [
                {
                    name: 'Github',
                    username: 'PolarizedIons',
                    link: 'https://github.com/polarizedions',
                },
                {
                    name: 'Twitter',
                    username: 'PolarizedIons',
                    link: 'https://twitter.com/polarizedions',
                },
                {
                    name: 'Discord',
                    username: 'PolarizedIons#9928',
                    link: '',
                },
                {
                    name: 'Instagram',
                    username: 'PolarizedIons',
                    link: 'https://instagram.com/polarizedions',
                },
                {
                    name: 'LastFM',
                    username: 'PolarizedIons',
                    link: 'https://www.last.fm/user/Polarizedions',
                },
                {
                    name: 'Steam',
                    username: 'PolarizedIons',
                    link: 'https://steamcommunity.com/id/polarizedions/',
                },
                {
                    name: 'Twitch',
                    username: 'PolarizedIons',
                    link: 'https://twitch.com/polarizedions',
                },
                {
                    name: 'Email',
                    username: 'me@polarizedions.net',
                    link: 'mailto:me@polarizedions.net',
                },
            ],
        };
    },
};
</script>
