<template>
  <div id="about">
    <div class="header">
      <h1>About Me</h1>
    </div>
    <div class="main">
      <div class="qna" v-for="(qna, i) of qnas" :key="i">
        <span class="q">{{ qna.q }}</span>
        <span class="a">{{ qna.a }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  qnas = [
    {
      q: "What is your real name?",
      a: "Stephan (IPA: /stɪpɦɑn/)"
    },
    {
      q: "How old are you?",
      a: `I am ${this.age}.`
    },
    {
      q: "Where are you from?",
      a: "The south-western part of South Africa"
    },
    {
      q: "What do you do?",
      a: "I am currently a junior developer for a software company"
    },
    {
      q: "Why the name PolarizedIons?",
      a:
        "Well, I wanted a unique name for myself online, and one day in chemisty class I saw something like that in a book. I decided there and then that PolarizedIons will be me. "
    },
    {
      q: "What languages do you know?",
      a:
        "Afrikaans, English, Java, Javascript, Python and a little bit of php, Rust and C."
    },
    {
      q: "Favourite game?",
      a:
        "Probably either Minecraft, Skyrim, or Portal 2. Oblivion, Celeste and Half Life are cool too though!"
    },
    {
      q: "Favourite music artist?",
      a: "Hard question! Usually something by dodie, Troye Sivan, or 99lives"
    }
  ];

  get age() {
    let ageDifMs = new Date().getTime() - new Date("1998/07/13").getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
</script>

<style scoped>
#about {
  padding: 1.2rem;
}

.header,
.main {
  width: 70%;
  margin: 0 auto;
}

.header {
  text-align: center;
  background: var(--purple);
  margin-bottom: 1.2rem;
  padding: 0.6rem 0;
}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.2rem;
}

.qna {
  background: #fff;
}

.qna .q,
.qna .a {
  padding: 1.2rem 0.6rem;
}

.qna .q {
  display: block;
  background: var(--blue);
  text-align: center;
  font-weight: bold;
  color: #fff;
}

.qna .a {
  display: block;
}
</style>
