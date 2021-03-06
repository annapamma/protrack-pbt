const fixedCategories = {
    horizontal: {
        Missing: [
            ['', '#ffffff'],
        ],
    },
    vertical: {
            'Grade': [
                ['I', '#A6CEE3'],
                ['I/II', '#1F78B4'],
                ['II', '#B2DF8A'],
                ['III', '#33A02C'],
                ['III/IV', '#FB9A99'],
                ['IV', '#E31A1C'],
            ],
            'Diagnosis': [
               ['Ganglioglioma', '#00FFFF'],
               ['Ependymoma', '#00FF40'],
               ['Craniopharyngioma', '#FFBF00'],
               ['LGG', '#9F72FF'],
               ['HGG', '#3249DC'],
               ['ATRT', '#b30103'],
               ['Medulloblastoma', '#FF7ECF'],
            ],
            'Tumor location': [
               ['Spine', '#77AF9C'],
               ['Supratentorial', '#379634'],
               ['Optic pathway', '#755B69'],
               ['Suprasellar', '#E6AF2E'],
               ['Cortical', '#CAFFB9'],
               ['Cerebellar/Posterior fossa', '#E2B6CF'],
               ['Brain stem', '#468189'],
               ['PF>SPINE', '#434ed0'],
               ['Midline', '#F7D002'],
               ['Ventricles', '#8EF9F3'],
               ['Thalamic/cortical', '#BF1A2F'],
            ],
            'Proteo cl': [
                ['Ependy', '#75f961'],
                ['Medullo', '#ef87cc'],
                ['Aggressive', '#71654a'],
                ['Cranio/LGG-BRAF-V600E', '#c79b72'], //fffea6'],
                ['HGG-rich', '#2c72c7'],
                ['Ganglio-rich', '#74cfeb'],
                ['LGG_BRAF.WT-rich', '#493d8c'],
                ['LGG_BRAF.fusion-rich', '#b3a3f3'],
            ],
            'Phospho cl': [
                ['1', '#47828C'],
                ['2', '#0EEC55'],
                ['3', '#B16A92'],
                ['4', '#CF9461'],
                ['5', '#3271E6'],
                ['6', '#9577FE'],
                ['7', '#47B5FC'],
                ['8', '#A782D2'],
            ],
            'RNA cl': [
                ['1', '#09EC51'],
                ['2', '#F27ACF'],
                ['3', '#5588D7'],
                ['4', '#961233'],
                ['5', '#881A4B'],
                ['6', '#9A73FE'],
                ['7', '#FFBF00'],
                ['8', '#5CA4F6'],
            ],
            'HGG_H3F3A status': [
                ['H3F3A WT', '#b2df8a'],
                ['H3F3A K27M', '#33a02c'],
            ],
            'CTNNB1 status': [
                ['CTNNB1 WT', '#a6cee3'],
                ['CTNNB1 Mutant', '#1f78b4'],
            ],
            'LGG_BRAF status': [
                ['BRAF Wild Type', '#00ff00'],
                ['BRAF fusion', '#FFA500'],
                ['BRAF p.V600E + BRAF p.T599dup', '#800080'],
            ],
            'Ependymoma_RELA status': [
                ['RELA Wild Type', '#c71585'],
                ['RELA fusion', '#003366'],
            ],
            'Survival status': [
                ['Alive', '#7FC97F'],
                ['Deceased-due to disease', '#386CB0'],
                ['Deceased-due to other causes', '#F0027F'],
                ['Deceased-due to unknown causes', '#FFFF99'],
            ],
            'Treatment status': [
                ['Treatment naive', '#8D99AE'],
                ['Post-treatment', '#2B2D42'],
            ],
            'Sample collection': [
                ['Surgical collection', '#7fc97e'],
                ['Post-mortem', '#E0E0E2'],
            ],
    },
}
export default {
    'all': {
        categoriesHorizontal: {
            'Proteo/mRNA/Phospho Z-Score': [
                ['<-3', '#00004d'],
                ['-2', '#0066cc'],
                ['-1', '#82b6ff'],
                ['0', '#E8E8E8'],
                ['1', '#ff7777'],
                ['2', '#ff1111'],
                ['>3', '#990000'],
            ],
            'CNV': [
                ['(-inf, -0.5]', '#00004d'],
                ['(-0.5, -0.2]', '#82b6ff'],
                ['(-0.2, 0.2]', '#E8E8E8'],
                ['(0.2, 0.5]', '#ff7777'],
                ['(0.5, +inf)', '#990000'],
            ],
            ...fixedCategories.horizontal,
        },
        categories: {
            ...fixedCategories.vertical,
            'Mutation': [
                ['No', '#a6cee3'],
                ['Yes', '#1f78b4'],
            ],
        },
    },
    'phospho': {
        categoriesHorizontal: {
            'Phosphosite abundance (mean normalized)': [
                ['<-3', '#00004d'],
                ['-2', '#0066cc'],
                ['-1', '#82b6ff'],
                ['0', '#E8E8E8'],
                ['1', '#ff7777'],
                ['2', '#ff1111'],
                ['>3', '#990000'],
            ],
            ...fixedCategories.horizontal
        },
        categories: {
            ...fixedCategories.vertical
        },
    },
    'mut': {
        categoriesHorizontal: {
            'Mutation occurrences': [
                ['0', '#ececec'],
                ['1', '#FFA500'],
                ['2', '#993F00'],
            ],
            ...fixedCategories.horizontal
        },
        categories: {
            ...fixedCategories.vertical
        },
    },
  'cnv': {
      categoriesHorizontal: {
            'CNV': [
                ['(-inf, -0.5]', '#00004d'],
                ['(-0.5, -0.2]', '#82b6ff'],
                ['(-0.2, 0.2]', '#E8E8E8'],
                ['(0.2, 0.5]', '#ff7777'],
                ['(0.5, +inf)', '#990000'],
            ],
            ...fixedCategories.horizontal,
        },
        categories: {
            ...fixedCategories.vertical,
        },
  },
  'proteo': {
      categoriesHorizontal: {
            'Proteo Z-Score': [
                ['<-3', '#00004d'],
                ['-2', '#0066cc'],
                ['-1', '#82b6ff'],
                ['0', '#E8E8E8'],
                ['1', '#ff7777'],
                ['2', '#ff1111'],
                ['>3', '#990000'],
            ],
            ...fixedCategories.horizontal,
        },
        categories: {
            ...fixedCategories.vertical,
        },
  },
  'rna': {
      categoriesHorizontal: {
            'mRNA Z-Score': [
                ['<-3', '#00004d'],
                ['-2', '#0066cc'],
                ['-1', '#82b6ff'],
                ['0', '#E8E8E8'],
                ['1', '#ff7777'],
                ['2', '#ff1111'],
                ['>3', '#990000'],
            ],
            ...fixedCategories.horizontal,
        },
        categories: {
            ...fixedCategories.vertical,
        },
  }
}
