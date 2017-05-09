# Trello-Clone---Express-Knex-HBRS

## Built With
* HTML
* CSS
* jQuery
* Handlebars
* Express
* Knex

## Deployment
This site has a backend so we will need to deploy on a platform that can support running a server and database. Heroku is a great platform for doing this.

Create or login to your heroku account [here](https://dashboard.heroku.com/apps)

Make sure you are in the directory of the project you want to deploy.

If you are in a different branch, return to master and merge your branch with master. If you have uncommitted changes, add and commit.

Run this command in your terminal.
```
heroku apps:create <NAME OF APP GOES HERE>

ex: heroku apps:create myapp
```

Check out what you just created with this command.
```
heroku apps:info
```

Check what "DEV_VERSION" of Node you have been developing in (or... what version you have installed on your computer).
```
node -v

ex: 7.4.0
```

Add this version of Node into your package.json file as an engine.
```
"engines": {
  "node": "DEV_VERSION"
}
```

Create a database in your heroku app.
```
heroku addons:create heroku-postgresql
```

Check out the database you just created with this command.
```
heroku pg:info
```

Look at your knexfile.js and verify that you have configured your database for a production environment. You should have a key-value pair similar to this.
```
production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
```

To automatically migrate your database migrations add this to your package.json file.
```
"scripts": {
  "knex": "knex",
  "heroku-postbuild": "knex migrate:latest"
}
```

Create a Procfile that will start the server in the production environment with this command.
```
echo 'web: node server.js' >> Procfile
```

Generate a secret key that will be used to sign JWT in a production environment with this command.
```
bash -c 'heroku config:set JWT_KEY=$(openssl rand -hex 64)'
```

Double check to make sure you have added and committed any changes.

To deploy, we will push our master branch to heroku with this command.
```
git push heroku master
```

Once deployed, seed your database with this command.
```
heroku run npm run knex seed:run
```

WELL DONE!

To view info about your app, the database, to query the database, or to see the server logs, use the following commands.
```
heroku apps:info
heroku pg:info
heroku pg:psql
heroku logs
```

## About
This repo is part of a group of Trello Clone apps build with a progression of technologies.
