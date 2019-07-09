<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
    name: 'App',
    components: {
        NavBar,
    },
};

</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background: #263238;
        font-family: 'Roboto', sans-serif;
    }

    ::selection {
      color: #fff;
      background: #009688;
    }
    ::-moz-selection {
      color: #fff;
      background: #009688;
    }
</style>
