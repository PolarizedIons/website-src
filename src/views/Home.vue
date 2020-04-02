<template>
  <div id="home">
    <aside>
      <nav-bar></nav-bar>
    </aside>
    <main v-scroll-spy>
      <component
        :is="compName"
        v-for="compName of Object.values($root.sections)"
        :key="compName"
      ></component>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavBar from "../components/NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
main > * {
  min-height: 100vh;
}

aside {
  width: var(--sidebar-width);
  background: var(--primary-background);
  height: 100vh;
  position: fixed;
}

main {
  margin-left: var(--sidebar-width);
}

@media (max-width: 670px) {
  :root {
    --base-font-size: 13px;
  }

  aside {
    display: none;
  }

  main {
    margin-left: 0;
  }
}
</style>
