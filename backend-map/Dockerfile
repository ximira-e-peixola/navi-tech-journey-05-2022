FROM esridc/node-gdal

WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
CMD ["npm", "run", "start"]
