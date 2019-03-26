Heroku Deployment
================

### Heroku CLI Tool
- Install Tool `brew tap heroku/brew && brew install heroku`
- Login to Heroku from CLI `heroku login`

### Using Heroku
- Get the git url and add it as a remote to your project
- Push your code to the heroku repo
- Run any rake tasks (migrate, seed)

#### Configuration
Remember, when deploying an app, consider changes that need to be made for these things:

- Environment variables (API Keys, JWT secrets)
- URLs
- CORS

When deploying a React app built using `create-react-app` you must specify a buildpack to use `process.env` properly.
	- Go to Settings on the dashboard and go down to buildpacks. Click "Add a buildpack" and enter the following URL: https://github.com/mars/create-react-app-buildpack
	- This buildpack will only apply on a redeploy, so to see the changes, you must redeploy your application

#### Other useful bits
- Access to error logging via the heroku dashboard (More -> View logs)
- Access to environment variables on the settings page
- Use `heroku config` from your terminal to see config vars for a particular repo
- User `heroku run <TERMINAL COMMAND>` to run terminal commands on the Heroku server


### Common Problems

- Ruby version must be 2.5 and greater
	- Use RVM to install other versions of Ruby and change versions
	- Gems are installed for a specific version of Ruby, so if you change versions, you must reinstall gems
	- Installing bundler problems: https://stackoverflow.com/questions/54087856/cant-find-gem-bundler-0-a-with-executable-bundle-gemgemnotfoundexceptio
- Frontend fetch URLs are all "localhost" but should be switched to your deployed backend's URL
	- Use the adapter pattern so your fetches are all in one place
	- Use the environment (`process.env.NODE_ENV`) to determine which URL to use


