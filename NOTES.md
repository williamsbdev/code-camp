Presentation Notes
------------------

## Getting started with nothing

    ember new <app-name>

##  Getting started with directory created

    ember init
    ember i

## Building app

    ember build
    ember b

- show off what this gives you in dist/
 - unminified code
 - with test code

## Building app for production

    ember build --env=production
    ember b --env=production

- show off what this gives you in dist/
 - minified version of code
 - you can pick up this folder and deploy this

## Now you actually want to see and play with the app

    ember server
    ember s

- you can interact with your app!
- it watches for file changes and reloads the page for you

## Now you want to run tests

    ember test
    ember t
    ember test --server
    ember t -s

## Now I want to write some code (practicing TDD of course)

    ember generate acceptance-test login
    ember g acceptance-test login

we can fix the failing assertion again with:

    ember generate route login
    ember g route login

## What is this generate command?

- ember-cli has lots of nice [blueprints]
- I don't use many of them
- I believe they are incredibly helpful for new people learning Ember!
- Go delete the unit test file for the generated route

## Let's start building a real app and see what else we can learn

- add login test to show that we need username/password field
- want to refactor to use the [ember-cli-password-toggle]
 - add ember-cli-password-toggle to package.json (version 1.2.0)
 - `npm install`

## Ember Addons:  How did that work!?!?

- the ember-cli ecosystem has [Ember Addons]
 - this is a very easy way to share code across ember applications
 - an addon is simply a very opinionate node module
 - ember applications know how to pull in and namespace addons

## Styling (Another Ember Addon)

- ember-cli-sass (version 4.0.1)
- config/environment.js
- `ENV.sassOptions = { includePaths: ['bower_components/foundation/scss', 'app/styles']};`

## Server Mocks

    ember generate http-mock login
    ember g http-mock login

- creates a simple express app that allows you to interact with app in server mode
- mock any and all requests and provide stub data for responses

## Let's create an addon

    ember addon foobar

- this will create an addon with the namespace of `foobar`
- addon/ will have namespace of addon
- app/ will be copied into the host app
- publishing to npm will make this addon available for inclusion
- you can use alternatives if it is not to be shared (internal git repo)


[blueprints]: http://www.ember-cli.com/#generators-and-blueprints
[ember-cli-password-toggle]: https://github.com/nchristus/ember-cli-password-toggle
[Ember Addons]: http://emberaddons.com
