<template>
  <div class="logo-container">
    <div class="protrack" style="font-size: 3em; font-weight: bold; margin-left: 10px; margin-top: 12px">
        ProTrack: Pediatric Brain Tumor
    </div>
    <div class="mssm-logo">
        <img class="mssm-logo-img" src="../assets/logo_combined.png">
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'LogoContainer',
};
</script>

<style scoped>
  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mssm-logo-img {
    height: 80px;
    margin-left:auto;
    margin-right:0;
  }
</style>
