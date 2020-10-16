<template>
    <a @click.prevent="selectQuote" href="#">🎵 {{ quote }}</a>
</template>

<script>
export default {
    name: 'SongQuote',
    data() {
        return {
            quote: '',
            quotes: [
                /* Alan Walker */
                "What's the trick, wish I knew",
                'When it all falls down then whatever',
                "When it all falls I'll be fine",
                'If this night is now forwver, at lease we are together',
                "I know I'm not alone",
                "I'm faded",
                'Sing me to sleep now',

                /* All American Rejects */
                'When we were kids in the street',
                "Here's another pity",
                "There's another chance",
                'You can sit besides me when the world comes down',

                /* All Time Low */
                'On a fault line late at night',
                "I won't forget the good times",
                'I never want to leave this sunset town',
                'The kids in the dark, the kids in the dark',

                /* Angels & Airwaves */
                'I never whanted to say how much I liked you',
                'Let me feel you, carry you higher',
                'Watch our words spread hope like fire',
                'Secret crowds rise up and gather',
                'Hear your voices sing back louder',
                "I do this from time to time, when I can't wake from a bad dream",
                'I do this from time to time, when I can never say the things I mean',
                'I do this from time to time, where I like to watch you as you sleep',
                'I do this from time to time, where I like to think of you and me',

                /* Avril Lavigne */
                'He was a boy, she was a girl, can I make it anymore obvious',
                'He was a skater boy, she said see you later boy',

                /* Billie Eilish */
                'Sneaking, on your tippy toes',
                "So you're a tough guy, like it really rough guy",
                'Duh',

                /* Cavetown */
                'You look so good in green',
                "I hope you're well",
                'There once was a bitter sweet man and they called him lemon boy',
                'Lemon boy and me we started to get along together',

                /* Chainsmokers */
                'I need you, I need you, I need you right now',
                'Been reading books of old, the legends and the myths',
                "I'm not looking for body with some super human gifts",
                'Oh I want something just like this',

                /* Coldplay */
                "When you try your best but you don't succeed",
                'When you get what you want, but not what you need',
                "When you lose something you can't replace",
                'When you love someone but it goes to waste',
                'I will try to fix you',
                'From the top of the first page to the end of the last day',
                'From start in your own way, you just want, somebody listening to what you say',

                /* dodie */
                'I feel like a 6/10',
                'I gotta get up early tomorrow again',
                'What goes on behind the words?',
                'Is there pity for the plain girl?',
                "I know that you, don't want me here",
                "Can't you tell I live a liar",
                "I've gotta remember, that I'm just a toy",
                'I wanna pick you up and scoop you out',
                "I want the secrets your secrets haven't found",
                "Paint me in trust, I'll be your best friend",
                "I'm so human",
                'Tell me again, about how it hurts, being awfully loud, for an introvert',
                "I'm guessing that I've grown horns",
                "So maybe I'll talk to you the only way I know how to",
                'You break the rules and spikes grow from your skin',
                "We're not brused, they're just party tatoos",
                'Black lipstick will never be a sin',
                "I've got a secret for the mad",
                "In a little bit of time it won't hurt so bad",
                "You will burn right now but then you won't regret it",
                "I'm sick of losing soulmates, so where do we begin?",
                "I can finally see, you're as fucked up as me, so how do we win?",
                'Oh would you be so kind, as to fall in love with me?',

                /* EDEN */
                'want you to be the last thing on my mind',
                'Want you to be the reason I close my eyes',
                'Cuz you say I drink and I smoke, and I talk too much',

                /* Every Avenue */
                "I know I could've been a better man",
                "When you tell me I'm a wreck, how could you expect anything less",
                'You latched on to me and cried I strung you along',

                /* Fall Out Boy */
                'You will remember me, remember me for centuries',
                "I'm just a notch on your bedpost, but you're just a line in a song",
                "We're going down down in an earlier round",
                "Sugar we're going down swinging",
                "I'll be your number one with a bullet",
                'A loaded god-complex, cock it and pull it',

                /* The Goog Goo Dolls */
                'And I give up forever to touch you',
                "And I don't want the world to see me, cuz I don't think that they'd understand",
                "When everything's made to be broken, I just want you to know who I am",

                /* Green Day */
                'Do you have the dime, to listen to me wine?',
                'Sometimes I give myself the creeps',
                "I'm I just paranoid? Or am I just stoned?",

                /* Krewella */
                "Let's make this fleeting moment last forwever",
                "I live for the night, I live for the light, I live for the high till I'm free falling",

                /* Lauv */
                'To be young and in love in New-York City',
                "I like me better when I'm with you",

                /* Lemonade Mouth */
                "I can't pretend to know how you feel, but know I'm here, know that I'm real",
                "Reach for my hand cuz it's held out for you",
                "We'll always be more than a band",

                /* Marianas Trench */
                "Testing testing, I'm just suggesting, you and I might now be the best thing",

                /* Ninty9 lives */
                'When the downtime lights start to come out at night we go insane',
                "You can't stop me now",
                'Cuz we are, connected in unity',
                "We'll get far, as long as it's you and me",
                'Can you see, the stars align',
                "I'll be your flashlight",
                'Please can you stay, even just for the night',
                "I'm still running wild",
                "My mind's been floating a million miles from home",
                'Been chasing dreams, since I was young',
                "Cuz I see you, in my shoes, standing where I'm meant to be",
                'How did I get here? Who is that man, over there?!',
                "I found love and it's all for you",
                'The sun will rise on the loneliest night',
                "Tell me where I belong, I've been searching all night",
                "I'm a blank canvas you can paint",
                "Oh it's a miracle night, it's a miracle day",
                "It was a rainy night, 'round four years ago",
                'Kiss your words away, do not waste your time',
                'Lingering, pondering, save your space and wine',
                "You are not a tree, just move your view don't like where you are",
                'You never really got to know me',
                'I gaze into your eyes',
                'oh I love the way you smile',
                "I'm forever reaching out to, let you catch a glimps of me",
                'And I will try to be light, when the earth goes dark',
                "She's like an elevator, she'll take you up and bring you down down",

                /* Owl City */
                'You would not believe your eyes, if ten-million fierfiles, lit up the world as I fell asleep',
                "I'd like to make myself believe, that planet earch turns slowly",

                /* Panic! At The Disco */
                'Far to young to die',
                'Girls love girls and boys',

                /* Parachute */
                "Stay with me, baby stay with me, tonight don't leave me alone",
                'Hold my breath as your moving in, taste your lips as I feel your skin',
                "When the time comes, baby don't run, just kiss me slowly",
                'She wears a white dress',
                "She sees the light and it's saying 'come back'",

                /* Plain White T's */
                'She was solid gold, she was rock and roll',
                'Her memory pops up when I least expect it, gets stuck in my head like a broken record',
                'It was my last breath, I surrender to your attack',
                'Somewhere between the girl of my dream and the girl of my nightmares',

                /* P!nk */
                "Mistaken, always second guessing, underestimated, look I'm still around",
                "Pretty pretty please, don't you ever feel like you're less than fucking perfect",
                "Pretty pretty please, if you ever feel, like your're nothing, you're fucking perfect to me",
                "This used to be a fun house, now it's full of evil clowns",
                'We are search lights we can see in the dark',
                'What about us? What about all the times you said you had the answers',
                'What about us? What about all the broken happy every afters',
                'What about us? What about all the plans than ended in disaster',
                'what about love what about trus what about us',

                /* Rush B. */
                'There was a time, when I was alone, no where to go and no place to call home',
                'My only fiend was the man in the moon',

                /* Shadow of Whales */
                'Look at me, what do you see?',
                'There are no eyes on this face',
                'Fall back tonight, hold me inside',
                "Maybe, sometimes, I'll be just fine",
                'You really messed me up, when you let me down',
                "But we won't always be this way forever, it get's better, I tell yah",
                'Even in the worst we stay together, cuz I get her, and she gets me',
                'Cuz we are actors and acresses, playing our parts',

                /* Tessa Violet */
                'I used to be overwelmed by every little thing',
                "Cuz nothing satiates me, and I don't think that I hate me",
                "I don't want to be a human anymore, I'm done",
                "I don't want to make mistakes anymore, he's won",
                "I'm too old to change, broken down on the gound I'm too shy to make a sound",
                'Make me a robot, make me a robot, make, make me cold',
                "You call me up, say that you've been busy, but something made you just reach out",
                "You try but you can't shake me, I think we're going crazy",
                "Keep saying that we're through, but baby I'm not over you",

                /* Troye Sivan */
                'Kiss me on the mouth and set me free',
                "But please don't bite",
                'My youth, my youth is yours tipping on sky sipping waterfalls',
                'My youth, my youth is yours run away now forever more',
                'My youth, my youth is yours a truth so loud you cant ignore',

                /* Yellowcard */
                "Tell me secrets, cuz I know you're scares",
                'You have no idea how it feels, to lose something so fragile and dear',
                'Hold you up, against the light, speak the truth and say goodbye to you',
                'I thought we were alive, thought it was like when planets align',
                'I was safe, in my fortress alone then you came, and tore it all down',
                'I wanted to show you, the depth of this dream',
                "But you're like the winters you've always known, warm on the inside while I sleep in the snow",
                "I will send a transmission home, to say that I've been out here too long alone, and I wanna come down now.",

                /* Zedd */
                "Baby, why don't you just meet me in the middle",
                "I'm losing my mind just a little",
            ],
        };
    },
    methods: {
        selectQuote() {
            this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        },
    },
    mounted() {
        this.selectQuote();
    },
};
</script>
