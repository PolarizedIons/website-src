<template>
    <section>
        <div class='social' v-for='social of socials' :key='social.id'>
            <a :href="social.url">
                <img :src="images[social.id]" />
                <div class="info">
                    <h2>{{social.name}}</h2>
                    <span class="meta" v-if='social.meta' :data-content="social.meta"></span>
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
        flex-wrap: wrap;
    }

    section {
  display: flex;
}

.social {
  margin: 25px;
  background: #607D8B;
  padding: 5px;
  position: relative;
}

.social::after {
    content: '';
    width: 0;
    height: 0;
    border-bottom: 15px solid #4527A0;
    border-right: 15px solid transparent;

    position: absolute;
    z-index: 5;
    bottom: 29px;
    right: -15px;
}

.social:hover .meta::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #9E9E9E;
    transform: rotate(45deg) translate(50%, -100%);
    z-index: 50;
}

.social:hover .meta::after {
    content: attr(data-content);
    position: absolute;
    padding: 10px 15px;
    background: #9E9E9E;
    color: black;
    z-index: 50;
}

img {
  width: 128px;
}

.info {
  position: absolute;
  left: -15px;
  bottom: -40px;
  background: #673AB7;
  width: calc(100%);
  padding: 0 15px;
}

a {
  color: #fff;
}
</style>
