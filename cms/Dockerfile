FROM node:18-alpine3.16

WORKDIR /opt/cms

COPY . .

RUN npm install -g @sanity/cli \
    npm install;

# Port 3333 is the default port for Sanity at the time of writing.
# Just to be safe, explicitly run on port 3333 to match the docker compose yaml
CMD ["npm", "start", "--", "--host=0.0.0.0", "--port=3333"]