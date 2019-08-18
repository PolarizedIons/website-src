<template>
    <div>
        <section>
            <h2>Languages</h2>
            <div class="columns">
                <div class='col data'>
                    <v-jsoneditor v-model="languages" :plus="false" />
                </div>
                <div class="col chart">
                    <bar-chart class="test" :data="languages" height="200px" />
                </div>
            </div>
        </section>
        <section>
            <h2>My Day</h2>
            <div class="columns">
                <div class="col chart">
                    <doughnut-chart class="test" :data="day" height="200px" />
                </div>
                <div class='col data'>
                    <v-jsoneditor v-model="day" :plus="false" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VJsoneditor from 'v-jsoneditor';
import BarChart from '@/components/BarChart';
import DoughnutChart from '@/components/DoughnutChart';

export default {
    name: 'SkillPage',
    components: {
        VJsoneditor,
        BarChart,
        DoughnutChart,
    },
    data() {
        return {
            languages: {
                JavaScript: 80,
                HTML: 90,
                CSS: 90,
                VueJS: 75,
                Java: 80,
                'C#': 40,
            },
            day: {
                Coffee: 20,
                Coding: 30,
                Sleep: 30,
                Gaming: 15,
            },
        };
    },
};
</script>

<style>
    section {
        width: 70%;
        margin: 64px auto;
    }

    h2 {
        display: inline-block;
        padding: 10px 20px;
        background: #673AB7;
        border-radius: 25px;;
        border-bottom-left-radius: 5px;
        color: #fff;
    }

    .columns {
        display: flex;
    }

    .col {
        width: 48%;
        margin: 0 1%;
    }

    @media (max-width: 1000px) {
        .columns {
            flex-direction: column;
        }

        .col {
            width: 100%;
            margin: 30px 0;
        }
    }

    .ace_gutter {
        background: #3F51B5 !important;
        color: white !important;;
    }

    .ace_gutter-active-line {
        background: #3949AB !important;
    }

    .ace_content {
        background: #37474f;
        color: white !important;
    }
    .ace_active-line {
        background: #455a64 !important;
    }

    .jsoneditor-menu {
        background: #7E57C2 !important;
        border-bottom: 0 !important;
    }

    .jsoneditor.jsoneditor-mode-code {
        border: 0;
    }

    .ace_variable {
        color: #ff7043 !important;
    }
    .ace_constant {
        color: #9ccc65 !important;
    }
    .ace_selection {
        background: #607d8b !important;
    }
</style>
