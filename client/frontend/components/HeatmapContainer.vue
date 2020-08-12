<template>
  <div class="heatmap-container">
    <heatmap-clinical
        :series="topSeries"
        :options="options"
        :key="diagnosis"
    />
    <heatmap
        v-for="(val, gene) in series"
        :options="options"
        :series="val"
        :gene="gene"
        :key="gene"
    />
  </div>
</template>

<script>
import Heatmap from './Heatmap.vue';
import HeatmapClinical from "./HeatmapClinical.vue";
import DiagnosisSelector from "./DiagnosisSelector";

import chartOptions from '../heatmap_specs/chartOptions.js';
import colorScale from '../heatmap_specs/colorScale.js';

export default {
    name: 'HeatmapContainer',
    components: {
      DiagnosisSelector,
        HeatmapClinical,
        Heatmap,
    },
    data() {
        return {
            options: chartOptions(colorScale, this),
            fullPage: false,
        };
    },
    computed: {
        diagnosis() {
          return this.$store.state.selectedDiagnosis;
        },
        // isLoading() {
        //   return this.$store.state.isLoading;
        // },
        series() {
          return this.$store.state.series;
        },
        topSeries() {
          return this.$store.state.topSeries;
        },
    },
};
</script>

<style scoped>
  .heatmap-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }


  .heatmap-container p {
    margin: 2px;
  }

.diagnosis-instructions {
  font-size: small;
  font-weight: bold;
}
</style>
