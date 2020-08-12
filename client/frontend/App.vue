<template>
  <div id="app">
      <logo-container />
      <cptac-description />
      <diagnosis-selector />
      <div class="main">
        <input-container />
        <div class="data-view-container" id="data-view-container">
          <heatmap-container />
          <the-legend-container />
        </div>
      </div>
  </div>
</template>

<script>
import CptacDescription from '../frontend/components/CptacDescription.vue';
import HeatmapContainer from '../frontend/components/HeatmapContainer.vue';
import InputContainer from '../frontend/components/InputContainer.vue';
import LogoContainer from '../frontend/components/LogoContainer.vue';
import TheLegendContainer from "../frontend/components/TheLegendContainer.vue";
import DiagnosisSelector from "./components/DiagnosisSelector";

export default {
  components: {
    DiagnosisSelector,
    TheLegendContainer,
    CptacDescription,
    HeatmapContainer,
    InputContainer,
    LogoContainer,
  },
  data() {
    return {
      downloadingImage: false
    }
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch('submitGenes',
          {
            genes: ['BRAF', 'CTNNB1', 'FDPS', 'NF1', 'RABGAP1L', 'SMARCB1'],
            diagnosis: 'All',
            view: 'all',
          });
  },
  methods: {
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 99vw;
    height: 100vh;
    margin: 0 auto;
    font-size: small;
    font-weight: bold;
  }

  .main {
    display: flex;
    flex-direction: row;
  }

  button:hover {
    cursor: pointer;
  }

  .data-view-container {
    display: flex;
    overflow: scroll;
  }

</style>
