<template>
    <section>
        <h2>FAQ</h2>
        <h1>What do you want to know?</h1>

        <div class="qna-container">
            <div class="qna" v-for="({q, a}, index) of qna" :key="index">
                <span class="q">{{q}}</span>
                <span class="a">{{a}}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            qna: [
                {
                    q: 'What is your name?',
                    a: 'Stephan (IPA: /stɪpɦɑn/)',
                },
                {
                    q: 'How old are you?',
                    a: this.age(),
                },
                {
                    q: 'Where are you from?',
                    a: 'The south-western part of South Africa',
                },
                {
                    q: 'What do you do?',
                    a: 'I am currently a junior developer for a software company',
                },
                {
                    q: 'What\'s the point of this website?',
                    a: 'It was/is an opertunity for me to make a website for myself, while trying to make it look good, aswell as figuring out domain stuff too :P',
                },
                {
                    q: 'What did you use to make this website?',
                    a: 'A computer :^) I used Visual Studio Code, aswell as Firefox\'s developer console. :d VueJS mostly',
                },
                {
                    q: 'Why the name PolarizedIons?',
                    a: 'Well, I wanted a unique name for myself online, and one day in chemisty class I saw something like that in a book. I decided there and then that PolarizedIons will be me. ',
                },
                {
                    q: 'What languages do you know?',
                    a: 'Afrikaans, English, Java, Javascript, Python and a little bit of php, Rust and C.',
                },
                {
                    q: 'Favourite game?',
                    a: 'Probably either Minecraft or Skyrim, though Portal 2 is a close second.',
                },
                {
                    q: 'Favourite programming language?',
                    a: 'Depends what I\'m making or how I\'m feeling :P I usually pick javascript (node) for web stuff, and Java or Python for other general stuff',
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

<style scoped>
    section {
        width: 70%;
        margin: 0 auto;
    }

    h2 {
        display: inline-block;
        padding: 10px 20px;
        background: #673AB7;
        border-radius: 25px;;
        border-bottom-left-radius: 5px;
        color: #fff;
    }

    h1 {
        margin: 0;
        font-size: 3rem;
        color: #fff;
    }

    .qna-container {
        margin-top: 50px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .qna {
        padding: 7px 10px;
    }

    .q, .a {
        display: block;
        border-radius: 25px;
        margin: 15px 0;
        padding: 10px 20px;
        color: #eee;
        font-weight: bold;
    }

    .q {
        background:#607D8B;
        border-bottom-left-radius: 5px;
    }

    .a {
        background: #00BCD4;
        border-bottom-right-radius: 5px;
        text-align: right;
    }

    @media (max-width: 1000px) {
        .qna-container {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (max-width: 800px) {
        .qna-container {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 600px) {
        .qna-container {
            grid-template-columns: 1fr;
        }
    }
</style>
