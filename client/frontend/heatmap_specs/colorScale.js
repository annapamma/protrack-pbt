
function colorRange([val, hex]) {
  return {
    from: val,
    to: val,
    color: hex,
  };
}

const zscoreRanges = [
{
  from: -30,
  to: -2.75,
  color: '#00004d',
},
{
  from: -2.75,
  to: -2.5,
  color: '#003366',
},
{
  from: -2.5,
  to: -2.25,
  color: '#004c99',
},
{
  from: -2.25,
  to: -2,
  color: '#0066cc',
},
{
  from: -2,
  to: -1.75,
  color: '#0080ff',
},
{
  from: -1.75,
  to: -1.5,
  color: '#3399ff',
},
{
  from: -1.5,
  to: -1.25,
  color: '#66b2ff',
},
{
  from: -1.25,
  to: -1,
  color: '#82b6ff',
},
{
  from: -1,
  to: -0.75,
  color: '#99ccff',
},
{
  from: -0.75,
  to: -0.1,
  color: '#CCE5FF',
},
  {
  from: -0.1,
  to: 0.1,
  color: '#E8E8E8',
},
{
  from: 0.1,
  to: 0.75,
  color: '#ffcccc',
},
{
  from: 0.75,
  to: 1,
  color: '#ff9999',
},
{
  from: 1,
  to: 1.25,
  color: '#ff7777',
},

{
  from: 1.25,
  to: 1.5,
  color: '#ff6666',
},
  {
  from: 1.5,
  to: 1.75,
  color: '#ff5555',
},
{
  from: 1.75,
  to: 2,
  color: '#ff3333',
},
  {
  from: 2,
  to: 2.25,
  color: '#ff1111',
},
{
  from: 2.25,
  to: 2.5,
  color: '#ff0000',
},
{
  from: 2.5,
  to: 2.75,
  color: '#ff0000',
},
{
  from: 2.75,
  to: 3,
  color: '#E50000',
},
{
  from: 3,
  to: 30,
  color: '#990000',
},
];

const colorsRanges = {
1000: '#ffffff', //'NA'
1001: '#b2df8a', //'H3F3A WT'
1002: '#33a02c', //'H3F3A K27M'
1003: '#a6cee3', //'CTNNB1 WT'
1004: '#1f78b4', //'CTNNB1 Mutant'
1005: '#00ff00', //'BRAF Wild Type'
1006: '#FFA500', //'BRAF fusion'
1007: '#800080', //'BRAF p.V600E + BRAF p.T599dup'
1008: '#c71585', //'RELA Wild Type'
1009: '#003366', //'RELA Fusion'
1010: '#A6CEE3', //'I'
1011: '#1F78B4', //'I/II'
1012: '#B2DF8A', //'II'
1013: '#33A02C', //'III'
1014: '#FB9A99', //'III/IV'
1015: '#E31A1C', //'IV'
1016: '#77AF9C', //'Spine'
1017: '#379634', //'Supratentorial'
1018: '#755B69', //'Optic pathway'
1019: '#E6AF2E', //'Suprasellar'
1020: '#CAFFB9', //'Cortical'
1021: '#E2B6CF', //'Cerebellar/Posterior fossa'
1022: '#468189', //'Brain stem'
1023: '#434ed0', //'PF>SPINE'
1025: '#F7D002', //'Midline'
1026: '#8EF9F3', //'Ventricles'
1027: '#BF1A2F', //'Thalamic/cortical'
1028: '#75f961', // proteo cl: Ependy
1029: '#ef87cc', // proteo cl:Medullo
1030: '#71654a', // proteo cl:Aggressive
1031: '#c79b72', // proteo cl:'Cranio/LGG_BRAF.V600E'
1032: '#2c72c7', // proteo cl:HGG-rich
1033: '#74cfeb', // proteo cl:Ganglio-rich
1034: '#493d8c', // proteo cl:'LGG_BRAF.WT-rich'
1035: '#b3a3f3', // proteo cl:'LGG_BRAF.fusion-rich'
1036: '#FFBF00', // diagnosis: Craniopharyngioma
1037: '#9F72FF', // diagnosis: Low-grade glioma/astrocytoma
1038: '#3249DC', // diagnosis: High-grade glioma/astrocytoma
1039: '#00FFFF', // diagnosis: Ganglioglioma
1040: '#00FF40', // diagnosis: Ependymoma
1041: '#FF7ECF', // diagnosis: Medulloblastoma
1042: '#B30303', // diagnosis: Atypical Teratoid Rhabdoid Tumor (ATRT)
1043: '#7FC97F', // Last Known Clinical Status: Alive
1044: '#F0027F', // Last Known Clinical Status: Deceased-due to disease
1045: '#386CB0', // Last Known Clinical Status: Deceased-due to other causes
1046: '#FFFF99', // Last Known Clinical Status: Deceased-due to unknown causes
1047: '#47828C', // phospho cl 1
1048: '#0EEC55', // phospho cl 2
1049: '#B16A92', // phospho cl 3
1050: '#CF9461', // phospho cl 4
1051: '#3271E6', // phospho cl 5
1052: '#9577FE', // phospho cl 6
1053: '#47B5FC', // phospho cl 7
1054: '#A782D2', // phospho cl 8
1055: '#09EC51', // rna cl 1
1056: '#F27ACF', // rna cl 2
1057: '#5588D7', // rna cl 3
1058: '#961233', // rna cl 4
1059: '#881A4B', // rna cl 5
1060: '#9A73FE', // rna cl 6
1061: '#FFBF00', // rna cl 7
1062: '#5CA4F6', // rna cl 8
1071: '#8D99AE', // 'Treatment naive'
1072: '#2B2D42', // 'Post-treatment'
1073: '#416788', // 'Alive'
1074: '#E0E0E2', // 'Post-mortem'
1075: '#E8F0FF', // Mutation 0
1076: '#1f78b4', //Mutation 1
};

export default {
  ranges: Object.entries(colorsRanges).map(colorRange).concat(zscoreRanges),
};
