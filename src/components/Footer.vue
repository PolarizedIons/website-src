<template>
  <footer>
    <div class="copy">&copy; 2020 PolarizedIons</div>
    <quote class="quote"></quote>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Quote from "./Quote.vue";

@Component({
  components: {
    Quote
  }
})
export default class Footer extends Vue {}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  margin-left: var(--sidebar-width);
  background: var(--primary-background);
  padding: 1rem 2rem;
}
</style>
