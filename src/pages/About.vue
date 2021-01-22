<template>
    <div class="p-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:w-4/5 mx-auto">
        <div v-for="(question, i) in questions" :key="`question-${i}`" class="m-3">
            <div class="text-xl">{{ question.q }}</div>
            <div class="border-green-600 border-l-4 pl-3">{{ question.a }}</div>
        </div>
        <div class="m-3">
            <div class="text-xl">What is a random fact about you?</div>
            <a @click.prevent="selectRandomFact" href="#" class="border-green-600 border-l-4 pl-3">{{ randomFact }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            questions: [
                {
                    q: 'What is your real name?',
                    a: 'Stephan (IPA: /stɪpɦɑn/)',
                },
                {
                    q: 'How old are you?',
                    a: `I am ${this.age()}`,
                },
                {
                    q: 'Where are you from?',
                    a: 'The south-western part of South Africa',
                },
                {
                    q: 'What do you do?',
                    a: 'I am currently a fullstack web-developer for a software company',
                },
                {
                    q: 'Why the name PolarizedIons?',
                    a:
                        'Well, I wanted a unique name for myself online, and one day in chemisty class I saw something like that in a book. I decided there and then that PolarizedIons will be me. ',
                },
                {
                    q: 'What languages do you know?',
                    a: 'Afrikaans, English, with a few programming languages thown in as well',
                },
                {
                    q: 'Favourite game?',
                    a:
                        'Probably either Minecraft, Skyrim, or Portal 2. Oblivion, Celeste and the Half Life series are cool too though!',
                },
                {
                    q: 'Favourite type of music?',
                    a: 'Hard question! I go though phases where I listen to the same artist a lot, and something nothing at all.',
                },
                {
                    q: 'What did you make this website with?',
                    a: 'VueJS 3, TailwindCSS, hosted on Cloudflare',
                },
                {
                    q: 'What is your job/occupation?',
                    a: "I'm currently a fulltime, fullstack software developer at a company in South Africa",
                },
            ],
            facts: [
                "I have bad social anxiety - if I don't answer your phone call, this is why!",
                'I love hate pop music',
                'I can listen to almost any type of music, except rap/hard metal',
                'I love pumpkin soup',
                'Sometimes I listen to music all the time, sometimes I go weeks without listening to one song',
                "Sometimes on a whim, I'll rearange my bedroom completely",
                "I never studied at a universety, though people still think I'm good at what I do",
                "My cat's name is Zoey",
                'I stole this random-quote idea from my friend Ellpeck',
                "I almost never finish projects, but I'm pretty proud of those I do finish",
                "I've never left the country",
                'I have more international friends, than local ones',
                'I suck at public speaking',
                'According to 16personalities, I am an ISFP',
                'I have a discord snapback, whose import-costs, cost more than the actual hat',
                "I don't like scented candles",
            ],
            randomFact: '',
        };
    },
    methods: {
        age() {
            let ageDifMs = new Date().getTime() - new Date('1998/07/13').getTime();
            let ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        selectRandomFact() {
            this.randomFact = this.facts[Math.floor(Math.random() * this.facts.length)];
        },
    },
    mounted() {
        this.selectRandomFact();
    },
};
</script>
