
Development Process:

```` sh
express robots-api --view=ejs
git init .
git add .
git commit -m "Generate new express application"
heroku create southernct-443-robots-api
atom .
````

```` sh
npm install
````

Add a .gitignore file:

```` sh
node_modules/
````

Add a `Procfile` file:

```` sh
web: node ./bin/www
````
