<template>
    <div class="flex flex-wrap w-10/12 mx-auto justify-center">
        <div
            v-for="skill of skillSet"
            :key="`skill-${skill.name}`"
            class="bg-gray-800 flex items-center justify-center p-4 m-4 w-full lg:w-1/4 shadow-2xl"
        >
            {{ skill.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: {
                CSS3: 30,
                HTML5: 30,
                Java: 25,
                MySQL: 10,
                Docker: 15,
                VueJS: 25,
                Linux: 15,
                Git: 15,
                Github: 20,
                Bitbucket: 20,
                'C#': 20,
                Typescript: 15,
                Portainer: 20,
                Traefik: 15,
                TypeORM: 5,
                TailwindCSS: 10,
                Python3: 10,
                EFCore: 15,
                Bootstrap: 20,
                DNS: 15,
                PHP: 5,
                SemanticUI: 10,
                jQuery: 5,
            },
        };
    },
    computed: {
        skillSet() {
            const skillSet = [];
            for (const [name, confidence] of Object.entries(this.skills)) {
                skillSet.push({
                    name,
                    confidence,
                });
            }

            return skillSet;
        },
    },
};
</script>
