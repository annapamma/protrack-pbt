import json
import pickle

from flask import Flask, jsonify, safe_join, send_from_directory, request
from flask_cors import CORS, cross_origin

STATIC_DIR = '../client/dist/'
ASSETS_DIR = './assets'

app = Flask(__name__,
            static_folder=STATIC_DIR,
            )

# cors = CORS(app, resources={
#         r"/api/*": {"origins": "*"},
#     }
# )
if app.config['ENV'] == 'development':
    data_dir = '../data/pickle'
else:
    data_dir = '/home/cptacheatmap/protrack-pbt/data'

actual_df = pickle.load(open(f'{data_dir}/actual.pkl', 'rb'))
color_df = pickle.load(open(f'{data_dir}/color.pkl', 'rb'))
top_series = pickle.load(open(f'{data_dir}/top_series.pkl', 'rb'))
landing_data_series = pickle.load(open(f'{data_dir}/landing_data.pkl', 'rb'))
diagnosis = pickle.load(open(f'{data_dir}/diagnosis.pkl', 'rb'))


def filtered_df(df, genes):
    return df[(df['Gene symbol'].isin(genes)) | (df['Gene symbol'] == '')]


def filtered_df_single_gene(df, gene):
    return df[df['Gene symbol'] == gene]


def df_to_apex_data_single_gene(filtered_gene_df, actual):
    series = [
        {
            'name': data_type,
            'dataType': actual.loc[data_type]['Data type'],
            'data': [
                {
                    'x': val[0],  # sample ID
                    'y': val[1],  # color scale val
                    'value': actual[val[0]][data_type],
                    'gene': actual.loc[data_type]['Gene symbol'],
                }
                for val in vals.items()
            ]
        }
        for data_type, vals in filtered_gene_df.iterrows()
    ]
    phospho_index = [i for i, x in enumerate(filtered_gene_df.index) if 'phospho' in x]
    if len(phospho_index):
        phospho_start = phospho_index[0]
        blank_row = {'name': '', 'data': []}
        series.insert(phospho_start, blank_row)
    return series[::-1]


@app.route('/api/series/', methods=['POST'])
@cross_origin()
def submit_genes():
    data = json.loads(request.data)
    d = data['diagnosis']
    v = data['view']
    if d == 'All':
        s = actual_df.columns
    else:
        s = ['Data type', 'Gene symbol'] + diagnosis[d]
    genes = [g for g in data['genes'] if g in actual_df['Gene symbol'].values]
    filtered_color_df = color_df[s][color_df['Gene symbol'].isin(genes)]
    filtered_actual_df = actual_df[s][actual_df['Gene symbol'].isin(genes)]
    top_color_df = color_df[s][color_df['Gene symbol'] == ''].drop(columns=['Data type', 'Gene symbol'])
    top_actual_df = actual_df[s][actual_df['Gene symbol'] == ''].drop(columns=['Data type', 'Gene symbol'])

    final_top = df_to_apex_data(
        top_color_df,
        top_actual_df
    )

    series_single = {}
    series_all = {}
    final_series = {}
    if v != 'all':
        filtered_color_df = filtered_color_df[filtered_color_df['Data type'] == v]
        filtered_actual_df = filtered_actual_df[filtered_actual_df['Data type'] == v]
        final_series = df_to_apex_data(
            filtered_color_df.drop(columns=['Data type', 'Gene symbol']),
            filtered_actual_df,
            clinical=False
        )
    else:
        for g in genes:
            gdf = df_to_apex_data_single_gene(
                filtered_df_single_gene(filtered_color_df, g).drop(columns=['Data type', 'Gene symbol']),
                filtered_actual_df
            )
            if len(gdf):
                final_series[g] = gdf

    return jsonify({
        'topSeries': final_top,
        'series_all': series_all,
        'series_single': series_single,
        'series': final_series,
    })


@app.route('/api/clinical_data/', methods=['GET'])
@cross_origin()
def clinical_data():
    return jsonify({
        'series': clinical_data,
    })


@app.route('/api/landing_data/', methods=['GET'])
@cross_origin()
def landing_data():
    return jsonify(landing_data_series)


@app.route('/')
def index():
    return app.send_static_file("index.html")


@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory(safe_join(STATIC_DIR, ASSETS_DIR), path)


# phospho_df = pickle.load(open('../data/phospho.pkl', 'rb'))
# mutation_df = pickle.load(open('../data/mutation.pkl', 'rb'))
# mutation_color_df = pickle.load(open('../data/mutation_color.pkl', 'rb'))
#
# pathways = {
#     'hallmark': pickle.load(open('../data/pathways/hallmark.pkl', 'rb')),
#     'kegg': pickle.load(open('../data/pathways/kegg.pkl', 'rb')),
#     'reactome': pickle.load(open('../data/pathways/reactome.pkl', 'rb')),
# }


def df_to_apex_data(color_scale_df, actual_df, clinical=True):
    series = [
        {
            'name': data_type,
            'data': [
                {
                 'x': val[0], # sample ID
                 'y': val[1], # color scale val
                 'value': actual_df[val[0]][data_type],
                  'gene': '',
                }
                for val in vals.items()
            ]
        }
        for data_type, vals in color_scale_df.iterrows()
    ]
    blank_row = { 'name': '', 'data': [] }
    if clinical:
        series.insert(3, blank_row)
        series.insert(7, blank_row)
        series.insert(12, blank_row)
    return series[::-1]

#
#
# def df_to_apex_data_phospho(color_scale_df, actual_df):
#     series = []
#     for data_type, vals in color_scale_df.iterrows():
#         gene_symbol = actual_df['Gene symbol'][data_type]
#         if len(gene_symbol):
#             name = gene_symbol
#             phospho_id = data_type
#             phospho_id_truncated = ' ' + phospho_id.split("_")[-1]
#         else:
#             name = data_type
#             phospho_id = ''
#             phospho_id_truncated = ''
#
#         series.extend([{
#             'name': '{}{}'.format(name, phospho_id_truncated),
#             'phospho_id': phospho_id,
#             'data': [
#                     {
#                         'x': val[0],  # sample ID
#                         'y': val[1],  # color scale val
#                         'value': actual_df[val[0]][data_type],
#                         'phospho_id': phospho_id,
#                     }
#                     for val in vals.items()
#                 ]
#         }])
#     blank_row = { 'name': '', 'data': [] }
#     series.insert(7, blank_row)
#     series.insert(11, blank_row)
#     series.insert(13, blank_row)
#     series.insert(15, blank_row)
#     return series[::-1]
#
#
# def filtered_df(df, genes):
#     return df[(df['Gene symbol'].isin(genes)) | (df['Gene symbol'] == '')]
#
#
# @app.route("/api/color/<genes_input>/")
# def color(genes_input):
#     genes = genes_input.split(' ')
#
#     filtered_scale = filtered_df(color_scale, genes)
#     mutation_series = len(filtered_scale[filtered_scale['Data type'] == 'mutation'])
#
#     series = df_to_apex_data(
#         filtered_scale.drop(columns=['Data type', 'Gene symbol']),
#         actual_vals,
#         mutation_series
#     )
#
#     return jsonify({
#         'series': series
#     })
#
#
# @app.route("/api/phospho/color/<genes_input>/")
# def phospho_color(genes_input):
#     genes = genes_input.split(' ')
#
#     filtered_scale = filtered_df(color_scale_phospho, genes)
#
#     series = df_to_apex_data_phospho(
#         filtered_scale.drop(columns=['Data type', 'Gene symbol']),
#         actual_vals_phospho
#     )
#
#     return jsonify({
#         'series': series
#     })
#
#
# @app.route("/api/phospho/table/<genes_input>/")
# def table_phospho(genes_input):
#     genes = genes_input.split(' ')
#
#     filtered_scale = filtered_df(actual_vals_phospho, genes)
#     df_list = filtered_scale.to_dict(orient='records')
#
#     for i, row in enumerate(df_list):
#         row['idx'] = filtered_scale.index[i]
#
#     return jsonify({
#         'excelData': df_list
#     })
#
#
@app.route("/api/table/", methods=['POST'])
@cross_origin()
def table():
    genes = json.loads(request.data)
    filtered_scale = filtered_df(actual_df, genes)
    df_list = filtered_scale.to_dict(orient='records')

    for i, row in enumerate(df_list):
        row['idx'] = filtered_scale.index[i]

    return jsonify({
        'excelData': df_list
    })

#
# @app.route("/api/pathways/<db>/<pw>")
# def pathway(db='', pw=''):
#     return jsonify({
#         'pw_genes': pathways[db][pw]
#     })
#
#
# @app.route('/')
# def catch_all():
#     return app.send_static_file("index.html")
#
#
# @app.route('/assets/<path:path>')
# def send_assets(path):
#     return send_from_directory(safe_join(STATIC_DIR, ASSETS_DIR), path)
