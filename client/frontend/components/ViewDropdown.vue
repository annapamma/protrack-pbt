<template>
  <div class="view-dropdown">
    <label for="view-dropdown">View</label>
      <select v-model="selectedView" id="view-dropdown">
        <option value="all">all</option>
        <option value="cnv">cnv</option>
        <option value="mut">mutation</option>
        <option value="phospho">phospho</option>
        <option value="proteo">proteo</option>
        <option value="rna">rna</option>
      </select>
  </div>
</template>


<script>
// 'cnv', 'phospho', 'rna', 'mut', 'proteo'
export default {
  name: 'view-dropdown',
  computed: {
    selectedView: {
      get() {
        return this.$store.state.selectedView;
      },
      set(view) {
        this.$store.dispatch('updateSelectedView', view)
        this.$store.dispatch('submitGenes',
          {
            genes: this.$store.state.genes,
            diagnosis: this.$store.state.selectedDiagnosis,
            view
          });
      },
    },
  },
};
</script>


<style scoped>
  .view-dropdown {
      margin: 6px 0;
  }

  .view-dropdown label {
    width: 20%;
      font-weight: bold;
  }

  .view-dropdown select {
    margin-left: 5px;
    width: 80%;
  }
</style>
