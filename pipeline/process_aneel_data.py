import pandas as pd

def correct_columns_dtype(df: pd.DataFrame) -> pd.DataFrame:
    df.dthProcessamento = pd.to_datetime(df.dthProcessamento)
    df.vlrConsumoMWh = pd.to_numeric(df.vlrConsumoMWh)

    return df

def filter_most_recent_data(df: pd.DataFrame) -> pd.DataFrame:
    appended_data = []
    for consumption_class in list(df.nomClasseConsumo.unique()):
        filtered_cc = df[df.nomClasseConsumo == consumption_class]
        cc_most_recent_year = filtered_cc[filtered_cc.anoReferencia == filtered_cc.anoReferencia.max()]
        cc_most_recent_data = cc_most_recent_year[cc_most_recent_year.mesReferencia == cc_most_recent_year.mesReferencia.max()]

        appended_data.append(cc_most_recent_data)

    appended_df = pd.concat(appended_data)

    return appended_df
