<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --black: #0a0e0c;
  --navy: #202c39;
  --purple: #645986;
  --blue: #1c7ca1;
  --blue-dark: #146788;
  --green: #5c946e;
}

::selection {
  color: var(--green);
  background: var(--purple);
}

html,
body {
  margin: 0;
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  background: var(--navy);
  color: var(--black);
  box-sizing: border-box;
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
}

#app {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
