<template>
  <div>
    {{ loading }}
  </div>
</template>

<script>
export default {
  name: "test",
  computed: {
    loading() {
      console.log('in test')
      return this.$store.state.loading;
    }
  }
}
</script>

<style scoped>

</style>
