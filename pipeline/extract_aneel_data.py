import bs4
import requests

def extract_tariffs_data():
    URL = 'https://dadosabertos.aneel.gov.br/dataset/tarifas-medias-por-classe-de-consumo-e-regiao'

    content = requests.get(URL)
    soup = bs4.BeautifulSoup(content.text, 'html.parser')
    urls = soup.find_all("a", class_="resource-url-analytics")

    tariff_url = None
    for url in urls:
        if "tarifamediafornecimento.json" in url['href']:
            tariff_url = url['href']
    
    with requests.get(tariff_url, stream=True) as response:
        with open('data/average_supply_tariff.json', 'wb') as f:
            for chunk in response.iter_content(chunk_size=4096):
                f.write(chunk)
