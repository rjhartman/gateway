FROM node:18-alpine3.16

WORKDIR /opt/web

COPY . .

RUN npm install

# Port 3000 is the default port for Next at the time of writing
# Just to be safe, explicitly run on port 3000 to match the docker compose yaml
CMD ["npm", "run", "dev", "--", "--hostname=0.0.0.0", "--port=3000"]