<template>
    <div class="cptac-description">
      <p>This interactive data portal supports query, visualization, and downloads of multi-omics data from a comprehensive proteogenomic analysis of 218 tumors across seven histologic types of childhood brain cancer, a collaborative project by  <a target="_blank"  href="https://proteomics.cancer.gov/programs/cptac">Clinical Proteomic Tumor Analysis Consortium (CPTAC)</a> and <a target="_blank" href="https://cbttc.org/">Children’s Brain Tumor Tissue Consortium (CBTTC)</a>.</p>
      <p>NCI supported CPTAC, is a comprehensive and coordinated effort to accelerate the understanding of the molecular basis of cancer through the application of large-scale proteome (proteins) and genome (DNA and RNA) analysis technologies to different cancer types. Through collaboration with leaders in the field, CPTAC’s mission is to accelerate precision oncology through state-of-the-art proteogenomics and create open-source community resources.</p>
CBTTC is a collaborative, multi-institutional research program dedicated to the study and treatment of childhood brain tumors. The CBTTC supports the research of new prognostic biomarkers and therapies for children with pediatric brain tumors.
  </div>
</template>

<script>
export default {
  name: 'cptac-description',
};
</script>

<style scoped>
    .cptac-description {
        font-size: small;
        text-align: left;
        font-weight: bold;
        margin: 0 15px;
    }

    .cptac-description p {
        margin-top: 2px;
        margin-bottom: 0;
    }
</style>
