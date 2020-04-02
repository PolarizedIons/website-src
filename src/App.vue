<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --background: #2e2e2e;
  --primary-background: #0f0f0f;
  --primary: #862fc0;
  --secondary: #d6d6d6;
  --highlight: #2841cf;
  --sidebar-width: 400px;
  --base-font-size: 16px;
}

::selection {
  background: var(--primary);
  color: var(--secondary);
}

html,
body {
  margin: 0;
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  color: var(--secondary);
  font-size: var(--base-font-size);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  display: block;
  margin: 0;
  padding: 0;
  color: var(--primary);
}

h1 {
  font-size: calc(var(--base-font-size) * 2);
}

h2 {
  font-size: calc(var(--base-font-size) * 1.5);
}

h3 {
  font-size: calc(var(--base-font-size) * 1.17);
}

h4 {
  font-size: calc(var(--base-font-size) * 1);
}

h5 {
  font-size: calc(var(--base-font-size) * 0.83);
}

h6 {
  font-size: calc(var(--base-font-size) * 0.67);
}

#app {
  min-width: 100vw;
  min-height: 100vh;
  background: var(--background);
}

@media (max-width: 670px) {
  :root {
    --base-font-size: 14px;
  }
}
</style>
