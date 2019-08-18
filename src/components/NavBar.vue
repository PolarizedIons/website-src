<template>
    <nav>
        <ul>
            <li v-for="[title, pathName] of links" :key="title"><router-link :to="{name: pathName}">{{title}}<span class='underline'></span></router-link></li>
        </ul>
    </nav>
</template>

<script>
import { routes } from '../router';

export default {
    name: 'NavBar',
    computed: {
        links() {
            return routes.filter(el => !el.meta.hidden).map(el => [el.meta.title, el.name]);
        },
    },
};
</script>

<style scoped>
    nav {
        --padding-vert: 20px;
        --font-size: 1.2rem;
        --color: #03A9F4;

        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: calc(var(--padding-vert) * 2 + var(--font-size));
        margin-bottom: 20px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        display: flex;
    }

    a {
        position: relative;
        font-size: var(--font-size);
        color: #efefef;
        text-decoration: none;
        padding: var(--padding-vert) 25px;
        margin: 0 5px;
    }

    a::-moz-focus-inner, a:focus {
        border: 0;
        outline: none;
    }

    a.router-link-exact-active {
        color: var(--color);
    }

    .underline {
        content: '';
        position: absolute;
        background: var(--color);
        height: 3px;
        width: 30px;
        bottom: 0;
        left: 0;
        transition: width ease-in-out .3s;
    }

    a:hover .underline {
        width: 50px;
    }

    a.router-link-exact-active .underline {
        width: 100%;
    }
</style>
