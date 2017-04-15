## Contributor's Guide

Do you want to make this application better, or just run it locally to better understand how it works? Follow the steps below.

### Installation

Install MongoDB locally. Then install this repository and its package dependencies:

```` sh
git clone git@github.com:prof-rossetti/robots-api-express.git
cd robots-api-express/
npm install
````

### Usage

Seed the database:

```` sh
npm run db:seed
````

Run a local web server on the default port (3000), or on a specific port (e.g. 3003):

```` sh
npm run start

# ... OR ...

PORT=3003 npm run start
````
