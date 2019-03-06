<template>
    <div>
        <h2>Social Media</h2>
        <ul class="socials">
            <li v-for="social of socials" :key="social.id">
                <a :href="social.url">
                    <img :src="images[social.id]" :alt="`${social.name}'s Icon'`" class="icon"/>
                    <span class="name">{{social.name}}</span>
                    <span class="meta" v-if="social.meta">{{social.meta}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

// @ts-ignore
import images from '../img/*.png';

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
            ]
        }
    }
})
</script>

