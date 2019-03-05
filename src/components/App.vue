<template>
    <div id="site">
        <nav-bar></nav-bar>
        <p>Hello world</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NavBar from './NavBar';

    export default Vue.extend({
        name: "App",
        components: {
            NavBar,
        }
    });
</script>
