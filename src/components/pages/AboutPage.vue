<template>
    <div>
        <h2 class="subheading">About Me</h2>

        <div class="qna">
            <div class="row" v-for="(row, i) of qna" :key="i">
                <span class="q" v-html="row.q"></span>
                <span class="a" v-html="row.a"></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "AboutPage",
    data() {
        return {
            qna: [
                {
                    q: "What is your name?",
                    a: "Stephan (IPA: /stɪpɦɑn/)",
                },
                {
                    q: "How old are you?",
                    a: this.age(),
                },
                {
                    q: "Where are you from?",
                    a: "The south-western part of South Africa",
                },
                {
                    q: "What do you do?",
                    a: "I am currently an intern at a social media & web design company",
                },
                {
                    q: "What's the point of this website?",
                    a: "It was/is an opertunity for me to make a website for myself, while trying to make it look good, aswell as figuring out domain stuff too :P",
                },
                {
                    q: "What did you use to make this website?",
                    a: "A computer :^) I used Visual Studio Code, aswell as Firefox's developer console. :d VueJS mostly, with some TypeScript and SCSS thrown in.",
                },
                {
                    q: "Why the name PolarizedIons?",
                    a: "Well, I wanted a unique name for myself online, and one day in chemisty class I saw something like that in a book. I decided there and then that PolarizedIons will be me. ",
                },
                {
                    q: "What languages do you know?",
                    a: "Afrikaans, English, Java, Javascript, Python and a little bit of php, Rust and C.",
                },
                {
                    q: 'Did you steal some of this site\'s ideas from <a href="https://ellpeck.de">Ellpeck</a>?',
                    a: "Absolutely. He's an awesome guy, and had pretty neat ideas.",
                },
                {
                    q: "Favourite game?",
                    a: "Probably either Minecraft or Skyrim, though Portal 2 is a close second.",
                },
                {
                    q: "Favourite programming language?",
                    a: "Depends what I'm making or how I'm feeling :P I usually pick javascript (node) for web stuff, and Java or Python for other general stuff, though I'm starting to fall in love with Rust recently :3",
                },
            ]
        }
    },
    methods: {
        age() {
            let ageDifMs = new Date().getTime() - new Date("1998/07/13").getTime();
            let ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }
})
</script>
