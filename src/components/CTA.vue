<template>
  <section id="cta">
    <h2>Hi there</h2>
    <img src="../assets/me.jpg" />
    <span class="intro"
      >I'm <em>Stephan van Deventer</em>, also known as
      <em>PolarizedIons</em> and this, is my site :)</span
    >
  </section>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CTA extends Vue {}
</script>

<style scoped>
#cta {
  padding: 1rem 3rem;
}

h2 {
  text-align: center;
  margin: 1rem 0;
}

img {
  max-width: 20%;
  border-radius: 100%;
  display: block;
  margin: 2rem auto;
}

.intro {
  display: block;
  text-align: center;
}

.intro em {
  color: var(--primary);
}

@media (max-width: 670px) {
  img {
    max-width: 80%;
  }
}
</style>
