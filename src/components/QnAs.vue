<template>
  <section id="qnas">
    <h2>FAQ</h2>
    <div class="qna" v-for="(qna, i) of qnas" :key="i">
      <span class="q">{{ qna.q }}</span>
      <br/>
      <span class="a">{{ qna.a }}</span>
    </div>
  </section>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class QnAs extends Vue {
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
#qnas {
  padding: 1rem 3rem;
}

h2 {
  text-align: center;
  margin: 1rem 0;
}

.qna {
  margin: 1rem 0;
}

.qna .q,
.qna .a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 25px;
}

.qna .q {
  background: var(--primary);
  border-bottom-left-radius: 5px;
}

.qna .a {
  margin-top: 0.5rem;
  margin-left: 3rem;
  background: var(--highlight);
  border-bottom-right-radius: 5px;
}
</style>