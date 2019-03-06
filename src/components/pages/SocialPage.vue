<template>
    <div>
        <h2 class="subheading">Social Media</h2>
        <ul class="socials">
            <li v-for="social of socials" :key="social.id" class="item">
                <a :href="social.url || '#' + $route.path">
                    <img :src="images[social.id]" :alt="`${social.name}'s Icon'`" class="icon"/>
                    <div class="info">
                        <span class="name">{{social.name}}</span>
                        <span class="meta" v-if="social.meta">{{social.meta}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

// @ts-ignore
import images from '../../img/*.png';

import Vue from 'vue'
export default Vue.extend({
    name: "SocialMedia",
    data() {
        return {
            images: images,
            socials: [
                {
                    id: "github",
                    name: "Github",
                    url: "https://github.com/polarizedions",
                    meta: "",
                },
                {
                    id: "twitter",
                    name: "Twitter",
                    url: "https://twitter.com/polarizedions",
                    meta: "",
                },
                {
                    id: "irc",
                    name: "Freenode",
                    url: "",
                    meta: "PolarizedIons",
                },
                {
                    id: "discord",
                    name: "Discord",
                    url: "",
                    meta: "PolarizedIons#9928",
                },
                {
                    id: "email",
                    name: "Email",
                    url: "mailto:me@polarizedions.net",
                    meta: "me@polarizedions.net",
                },
                {
                    id: "instagram",
                    name: "Instagram",
                    url: "https://instagram.com/polarizedions",
                    meta: "",
                },
                {
                    id: "kofi",
                    name: "KoFi",
                    url: "https://ko-fi.com/PolarizedIons",
                    meta: "",
                },
                {
                    id: "lastfm",
                    name: "LastFM",
                    url: "https://www.last.fm/user/Polarizedions",
                    meta: "",
                },
                {
                    id: "steam",
                    name: "Steam",
                    url: "https://steamcommunity.com/id/polarizedions/",
                    meta: "",
                },
            ]
        }
    }
})
</script>

