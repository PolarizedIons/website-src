<template>
    <div id="site">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './NavBar.vue';

export default Vue.extend({
    name: "App",
    components: {
        NavBar,
    }
});
</script>
