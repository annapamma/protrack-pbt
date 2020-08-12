<template>
  <div id="app">
      <div v-if="downloadingImage" class="block-interaction" />
      <button type="button" @click="handleImageDownload">to canvas</button>
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
import html2canvas from 'html2canvas'

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
    handleImageDownload() {
      this.downloadingImage = true
    }
  },
  watch: {
    downloadingImage() {
      if (this.downloadingImage) {
        html2canvas(document.getElementById('data-view-container'))
          .then(
            cvs => {
              const pngData = cvs.toDataURL()
              const downloadLink = document.createElement('a')
              downloadLink.download = 'PBT-CPTAC-heatmap.png'
              downloadLink.href = pngData
              document.body.appendChild(downloadLink)
              downloadLink.click()
              document.body.removeChild(downloadLink)
              this.downloadingImage = false
          }
        )
      }
    }
  }
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

  .block-interaction {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.10);
    z-index: 9999;
  }
</style>
