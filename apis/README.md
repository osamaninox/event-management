# Event Management Service

## Description

Event Management Service, serves as a comprehensive solution for managing events of users.

## Prerequisites
- npm
- Node.js
- Docker

## Installation of dependencies

```bash
$ npm install
```

## Configuration

Create .env file on root using example.env file.

## Get Event management service database running using Docker

For a straightforward setup, you can use the docker to start the mongodb container. By running the command below:

```
docker run --name event-management-database -d -p 27017:27017 mongo:4.4
```

Check if the container is running:

```bash
docker ps
```

## Running the app

```bash
$ npm run start:dev
```

Use base URL [http://localhost:3000/api/](http://localhost:3000/api/) to check the API.
