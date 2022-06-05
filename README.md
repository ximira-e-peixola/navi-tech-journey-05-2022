# Solarent

O Frontend foi feito em React+Typescript usamos o antd como biblioteca de design.

O Backend foi desenvolvido em Node.js+Typescript com express.js.

As pipelines feitas em python extraem os dados das fontes e são inseridos no projeto do backend.

## Installation

O projeto do front usa uma API que depende de key fornecida por terceiros  ([Key Opencage-API](https://opencagedata.com/api#authentication)) que deve ser colocada no `.env` na raiz do front end como demonstra o `frontend/.env.example` 
 
## Installation & Usage
Foi usado o node na versão v14.19.2 no desenvolvimento do projeto

**Backend**

```
$ yarn global add nodemon
$ cd backend-map
$ yarn && yarn dev
```
**Frontend**

```
$ cd frontend
$ yarn && yarn start
```
 **Pipelines**

```
$ cd pipeline
$ pip install -r requirements.txt
$ python main.py
```
 
 
## Fontes de dados
https://opencagedata.com/

https://globalsolaratlas.info/

https://maplibre.org/

https://server.arcgisonline.com/
