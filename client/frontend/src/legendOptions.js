const fixedCategories = {
    horizontal: {
        Missing: [
            ['', '#ffffff'],
        ],
    },
    vertical: {
            'Stage/Grade': [
                ['I', '#A6CEE3'],
                ['I/II', '#1F78B4'],
                ['II', '#B2DF8A'],
                ['III', '#33A02C'],
                ['III/IV', '#FB9A99'],
                ['IV', '#E31A1C'],
            ],
            'Diagnosis': [
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
                ['Aggressive', '#732512'],
                ['Cranio/LGG-BRAF-V600E', '#fffea6'],
                ['HGG-rich', '#304ed4'],
                ['Ganglio-rich', '#74cfeb'],
                ['LGG-BRAF-WT-rich', '#493d8c'],
                ['LGG-BRAF-Fusion-rich', '#b3a3f3'],
            ],
            'Phospho cl': [
                ['1', '#FFFFAD'],
                ['2', '#828282'],
                ['3', '#FFCCA1'],
                ['4', '#FF5597'],
                ['5', '#5C88CB'],
                ['6', '#CCBDE3'],
                ['7', '#DC7541'],
                ['8', '#7cff7a'],
            ],
            'RNA cl': [
                ['1', '#FF89B0'],
                ['2', '#7CA4E8'],
                ['3', '#DBCBF1'],
                ['4', '#FFD9BB'],
                ['5', '#FA8F61'],
                ['6', '#FFFFC3'],
                ['7', '#9CE59C'],
                ['8', '#A0A0A0'],
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
                ['Deceased-due to disease', '#F0027F'],
                ['Deceased-due to other causes', '#386CB0'],
                ['Deceased-due to unknown causes', '#FFFF99'],
            ],
            'Treatment status': [
                ['Treatment naive', '#8D99AE'],
                ['Post-treatment', '#2B2D42'],
            ],
            'Status at collection': [
                ['Alive', '#416788'],
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
                ['No', '#E8E8E8'],
                ['Yes', '#003366'],
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
    'mutation': {
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
}
