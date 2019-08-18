<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
    name: 'BarChart',
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['data'],
    mounted() {
        this.renderChart(this.chartData, {
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                    },
                }],
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                    },
                }],
            },
        });
    },
    computed: {
        chartData() {
            let labels = Object.keys(this.data);
            let values = Object.values(this.data);

            return {
                labels: labels,
                datasets: [
                    {
                        label: '',
                        data: values,
                        backgroundColor: '#03A9F4',
                    },
                ],
            };
        },
    },
};
</script>

<style>

</style>
