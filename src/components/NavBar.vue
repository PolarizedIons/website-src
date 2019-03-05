<template>
    <nav id="nav">
        <h1>PolarizedIons.net</h1>
        <ul>
            <li v-for="route of routes" :key="route.path">
                <router-link :to="route.path">{{route.meta.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import {routes} from '../ts/router';

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            routes: routes
        }
    },
});
</script>
