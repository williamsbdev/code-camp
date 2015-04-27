Presentation Notes
------------------

# Getting started with nothing

    ember new <app-name>

# Getting started with directory created

    ember init
    ember i

# Building app

    ember build
    ember b

- show off what this gives you in dist/
-- unminified code with test code

# Building app for production

    ember build --env=production
    ember b --env=production

- show off what this gives you in dist/
-- minified version of code
-- you can pick up this folder and deploy this

# Now you actually want to see and play with the app

    ember server
    ember s

- you can interact with your app!
- it watches for file changes and reloads the page for you

# Now you want to run tests

    ember test
    ember t
    ember test --server
    ember t -s

# Now I want to write some code (practicing TDD of course)

    ember generate acceptance-test login
    ember g acceptance-test login

we can fix the failing assertion again with:

    ember generate route login
    ember g route login
