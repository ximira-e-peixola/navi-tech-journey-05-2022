import os

import pandas as pd

from extract_aneel_data import extract_tariffs_data
from process_aneel_data import correct_columns_dtype, filter_most_recent_data


if __name__ == '__main__':
    os.makedirs('./data', exist_ok=True)
    # extract average supply tariff aneel data
    extract_tariffs_data()

    # read the extracted data
    average_supply_tariff = pd.read_json('data/average_supply_tariff.json', encoding='windows-1258')
    processed_ast = correct_columns_dtype(average_supply_tariff)
    filtered_ast = filter_most_recent_data(processed_ast)

    filtered_ast.to_json('data/filtered_average_supply_tariff.json', orient='records')
