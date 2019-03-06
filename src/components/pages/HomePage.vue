<template>
    <div>
        <h2 class="subheading">{{greeting()}}</h2>

        <img class="blobheart" src="../../img/blobheart.png" />
    </div>
</template>
    
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "HomePage",
    data() {
        return {
            greetings:[
                "Hello world!",
                "Hello there!",
                "Welcome!",
                "Welcome to my little site",
            ]
        }
    },
    methods: {
        greeting() {
            return this.greetings[Math.floor(Math.random() * this.greetings.length)];
        }
    }
})
</script>
