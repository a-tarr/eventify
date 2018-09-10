FROM node:latest

RUN npm install -g serve

CMD serve -s build

EXPOSE 3000

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

# Copy all local files into the image.
COPY . .

RUN npm run build --production