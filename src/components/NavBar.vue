<template>
  <section>
    <h1>PolarizedIons.net</h1>
    <nav v-scroll-spy-active v-scroll-spy-link>
      <div
        class="link"
        v-for="linkName of Object.keys($root.sections)"
        :key="linkName"
      >
        <a>{{ linkName }}</a>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem 0;
  font-size: 1.5rem;
}

.link {
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
}

.link::before {
  content: "";
  display: block;
  position: absolute;
  background: var(--primary);
  left: 0;
  right: 100%;
  top: 0;
  bottom: 0;
  z-index: -1;
  transition: right 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.link.active {
  color: white;
}

.link.active::before {
  right: 0;
}

.link a {
  display: block;
}
</style>
