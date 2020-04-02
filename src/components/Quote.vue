<template>
  <span class="quote">🎵 {{ quote }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Quote extends Vue {
  quotes = [
    "I'm the bad guy... DUH!",
    "Kiss me on the mouth and set me free",
    "You thought you could charm me, and dammit you're right",
    "And I'm just tryna play it cool now",
    "What goes on... behind... those words?",
    "'Cause we are actors, and actresses, playing our parts",
    "I've got a secret for the mad",
    "You be the queen, and I'll be your clown",
    "When it all falls down, when it all falls down, I'll be fine",
    "I'm guessing that I've grown horns",
    "I know what it feels like, c'mon make me feel alive",
    "3 words, 2 hearts, 1 maybe",
    "She sees the light and it's saying 'come back'",
    "C'mon walk with me, to the edge of everything we've ever known",
    "He was a skater boy, she said see you later boy",
    "I know I'm not alone, I know I'm not alone, I'll be fine",
    "I'm comin' up so let's get this party started",
    "This used to be a fun house, but now it's full of evil clowns",
    "All alone, just the beat inside my soul",
    "We're not bruised, they're just party tatoos",
    "Oh would you be so kind, as to fall in love with me?",
    "Gotta turn your world into your dance floor"
  ];

  get quote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
</script>
