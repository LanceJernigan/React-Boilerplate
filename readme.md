# Development

## Routing
Routing is being handled by `react-router`.  All routes can be found `/components/App/routes.js`.  Each route should always point to a component in the `/pages` directory.  These pages are where the actual content will be stored.

## State
State is being managed by `redux`.  Reducers can be found in `/reducers` and will handle the actual updating of state based on the dispatched actions.  Actions can be found in `/actions` and handle the functionality of preparing the updates being passed to the reducers.

## Services
Any communication to an api should be handled via the `/services` folder.  These should return a promise so any state updates can be tied into the `.then` or `.catch` functionality.

# Setup

## Install dependencies
```
    yarn
```

## Start a development server
```
    yarn start
```

## Build for deployment
```
    yarn build
```