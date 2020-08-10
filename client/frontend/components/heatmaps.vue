<template>
    <div class="heatmaps">
    <heatmap-clinical v-if="!loading"
        :series="topSeries"
        :options="options"
    />
    <heatmap v-if="!loading"
        v-for="(val, gene) in series"
        :options="options"
        :series="val"
        :gene="gene"
        :key="gene"
    />
    </div>
</template>

<script>
import DiagnosisSelector from "./DiagnosisSelector";
import HeatmapClinical from "./HeatmapClinical";
import Heatmap from "./Heatmap";

export default {
  props: ['series', 'topSeries', 'options'],
  name: "heatmaps",
  components: {
      DiagnosisSelector,
      HeatmapClinical,
      Heatmap,
  },
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
}
</script>

<style scoped>

</style>
