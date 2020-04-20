# System requirements

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- Create mysql user and database

OR

- [Docker](https://docs.docker.com/get-docker/)

# Installation

- Clone git repository

    `$ git clone https://github.com/qvazi/fibonacci-react-node-express-mysql.git`

- Install `npm` dependencies

    `$ cd fibonacci-react-node-express-mysql`
    
    `$ npm run install`

- Rename `/server/app/config/db.config.example.js` to `/server/app/config/db.config.js`

- Insert earlier created mysql parameters: USER, PASSWORD, DB between `''`

- Start project `$ npm run start`

- In your browser, go to `http://localhost:3000`

# Run with docker-compose.

- Clone git repository

    `$ git clone https://github.com/qvazi/fibonacci-react-node-express-mysql.git`
    
    `$ cd fibonacci-react-node-express-mysql`

- Rename `/server/app/config/db.config.example.js` to `/server/app/config/db.config.js`

- `$ docker-compose up -d database`

    Wait: `Creating fibonacci-react-node-express-mysql_database_1 ... done`

- `$ docker-compose up -d server`

    Wait: `Creating fibonacci-react-node-express-mysql_server_1 ... done`

- In your browser, go to `http://localhost:8080`
