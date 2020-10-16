<template>
    <div class="min-h-screen w-screen bg-radial-gradient from-gray-900 to-gray-800 text-white flex flex-col-reverse">
        <router-view v-slot="{ Component }">
            <navbar></navbar>
            <div class="flex-grow mb-32">
                <transition name="slide-left" mode="out-in">
                    <component :is="Component" />
                </transition>
            </div>
        </router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar,
    },
};
</script>

<style lang="postcss">
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */

@tailwind utilities;

.slide-left-enter-active,
.slide-left-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
}

.slide-left-leave-to {
    opacity: 0;
    transform: translate(-6rem, 0);
}

.slide-left-enter-from {
    opacity: 0;
    transform: scale(0.75);
}
</style>
