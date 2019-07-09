<template>
    <section>
        <div class='social' v-for='social of socials' :key='social.id'>
            <a :href="social.url">
                <img :src="images[social.id]" />
                <div class="info">
                    <h2>{{social.name}}</h2>
                    <p v-if='social.meta'>{{social.meta}}</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
    let result = {};
    for (let entry of r.keys()) {
        let key = entry.replace('.png', '').replace('./', '');
        result[key] = r(entry);
    }

    return result;
}

const images = importAll(require.context('../../assets/social/', false, /\.png$/));

export default {
    name: 'SocialPage',
    data() {
        return {
            images,
            socials: [
                {
                    id: 'github',
                    name: 'Github',
                    url: 'https://github.com/polarizedions',
                    meta: '',
                },
                {
                    id: 'twitter',
                    name: 'Twitter',
                    url: 'https://twitter.com/polarizedions',
                    meta: '',
                },
                {
                    id: 'irc',
                    name: 'Freenode',
                    url: '#',
                    meta: 'PolarizedIons',
                },
                {
                    id: 'discord',
                    name: 'Discord',
                    url: '#',
                    meta: 'PolarizedIons#9928',
                },
                {
                    id: 'email',
                    name: 'Email',
                    url: 'mailto:me@polarizedions.net',
                    meta: 'me@polarizedions.net',
                },
                {
                    id: 'instagram',
                    name: 'Instagram',
                    url: 'https://instagram.com/polarizedions',
                    meta: '',
                },
                {
                    id: 'kofi',
                    name: 'KoFi',
                    url: 'https://ko-fi.com/PolarizedIons',
                    meta: '',
                },
                {
                    id: 'lastfm',
                    name: 'LastFM',
                    url: 'https://www.last.fm/user/Polarizedions',
                    meta: '',
                },
                {
                    id: 'steam',
                    name: 'Steam',
                    url: 'https://steamcommunity.com/id/polarizedions/',
                    meta: '',
                },
            ],
        };
    },
};
</script>

<style scoped>
    section {
        width: 70%;
        margin: 50px auto 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .social {
        margin: 25px;
        background-repeat: no-repeat !important;
        background-size: contain !important;
        background-position: center !important;
        position: relative;
    }

    img {
        background: #607D8B;
        height: 250px;
        padding: 25px;
        width: calc(100% - 25px);
    }

    .info {
        position: absolute;
        bottom: 0;
        padding: 10px 15px;
        background: rgba(0, 0, 0, 0.5);
        width: 100%
    }

    a {
        color: #eee;
    }
</style>
