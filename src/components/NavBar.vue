<template>
    <nav id="nav">
        <h1>PolarizedIons.net</h1>
        <ul>
            <li v-for="item of items" :key="item">
                <a :href="`#${toCssId(item)}`">
                    {{item}}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "NavBar",
        data() {
            return {
                items: [
                    "Home",
                    "Social",
                    "About Me"
                ]
            }
        },
        methods: {
            toCssId(name) {
                return name.toLocaleLowerCase().replace(' ', '-');
            }
        }
    });
</script>
