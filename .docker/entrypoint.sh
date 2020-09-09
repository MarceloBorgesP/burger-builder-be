#!/bin/bash

if [[ $NODE_ENV = "dev" ]]
then
  npm install
fi

npm run typeorm migration:run

if [[ $NODE_ENV = "dev" ]]
then
  npm run start:dev
fi

if [[ $NODE_ENV = "prod" ]]
then
  npm run start:prod
fi
