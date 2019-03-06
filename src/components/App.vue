<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view id="content" :class="`page page-${this.$route.meta.id}`"></router-view>
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
