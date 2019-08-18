<template>
    <section>
        <div class="intro">
            <div class="name">
                <h2>Hello, I am</h2>
                <h1>Stephan van Deventer</h1>
                <p>{{welcomeMessage}}</p>
            </div>
            <img src="../../assets/me.jpg" />
        </div>
    </section>
</template>

<script>

export default {
    name: 'HomePage',
    data() {
        return {
            welcomeMessages: [
                'Welcome to my little site!',
                'Well hello there :)',
                '"What is better? To be born good or to overcome your evil nature through great effort?" ― Paarthurnax, Skyrim',
            ],
        };
    },
    computed: {
        welcomeMessage() {
            return this.welcomeMessages[Math.floor(Math.random() * this.messages.length)];
        },
    },
};
</script>

<style scoped>
    section {
        width: 70%;
        margin: 0 auto;
    }

    .intro {
        display: flex;
    }

    .name {
        flex-grow: 1;
    }

    img {
        border-radius: 5%;
        border: 10px solid rgba(0, 0, 0, 0.2);
        width: 400px;
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

    p {
        font-size: 1.5rem;
        color: #aaa;
    }

    @media (max-width: 1200px) {
        img {
            width: 300px;
            height: 300px;
        }
    }

    @media (max-width: 800px) {
        .intro {
            flex-direction: column;
        }
    }
</style>
