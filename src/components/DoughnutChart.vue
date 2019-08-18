<script>
import { mixins, Doughnut } from 'vue-chartjs';

export default {
    name: 'DoughnutChart',
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    props: ['data'],
    mounted() {
        this.renderChart(this.chartData, {
            maintainAspectRatio: false,
            legend: {
                display: false,
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
