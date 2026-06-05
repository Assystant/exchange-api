FROM node:24-slim

ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

RUN npx playwright install firefox --with-deps && chmod -R 755 /ms-playwright

RUN npm install -g pm2

COPY . .

EXPOSE 4000

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
