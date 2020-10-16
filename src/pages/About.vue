<template>
    <div class="p-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div v-for="(question, i) in questions" :key="`question-${i}`" class="m-3">
            <div class="text-xl">{{ question.q }}</div>
            <div class="border-green-600 border-l-4 pl-3">{{ question.a }}</div>
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
                    a: 'Afrikaans, English, C#, VueJS, Java, JavaScript, and a little bit of php, python and bash',
                },
                {
                    q: 'Favourite game?',
                    a:
                        'Probably either Minecraft, Skyrim, or Portal 2. Oblivion, Celeste and Half Life are cool too though!',
                },
                {
                    q: 'Favourite music artist?',
                    a: 'Hard question! Usually something by dodie, Troye Sivan, or 99lives',
                },
                {
                    q: 'What did you make this website with?',
                    a: 'VueJS, TypeScript, TailwindCSS, VueWordCloud, hosted on Netlify',
                },
            ],
        };
    },
    methods: {
        age() {
            let ageDifMs = new Date().getTime() - new Date('1998/07/13').getTime();
            let ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
    },
};
</script>
