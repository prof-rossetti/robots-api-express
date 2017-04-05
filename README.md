
## Development Process

### Application Generation

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

Start a local web server:

```` sh
DEBUG=my_app:* npm start
````

Check it out in a browser at localhost:3000. It says "Welcome to Express." Good enough to deploy. Configure a remote repository, then deploy.

```` sh
git remote add origin git@github.com:prof-rossetti/robots-api-express.git
git push origin master
git push heroku master
heroku open
````

It says "Welcome to Express." Success. Application Generation, Configuration, and Deployment. Not too hard.
