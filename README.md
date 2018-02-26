# A simple quiz app written in NodeJS


## Prerequisites
- node.js
- npm package manager
- git

## Installation
Clone this repository and install node modules
```sh
$ git clone https://github.com/ivanmarban/node-quiz.git
$ cd node-quiz
$ npm install
```

Create a .env file in the root directory with required environment variables
```sh
DATABASE_URL=sqlite://:@:/
DATABASE_STORAGE=node-quiz.sqlite
PASSWORD_ENCRYPTION_KEY=asdfghjklzxcvbnmqwertyuiop
```

Start the app
```sh
$ node server.js
```
