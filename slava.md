
#React

- Few components should have state, if components have no state they can be written as pure functions
- `props.children` is the inner content of component
- `props` is owned by parent and is *immutable*, `state`
    is component's private  state and is *mutable*, it's reserved for interactivity
- `getInitialState()` initial state when component first rendered
- `componentDidMount()` called after a component is rendered for the first time
- spread attributes like `<Component {...props} />`

React Storybook?
time-travel debugging with redux?
react project file structure
LESS
Material (there actually seem to be 3 competing popular libs, in order of github stars - Material-UI, react-toolbox, mui)
unit testing
  - how to mock stuff without DI
react redux tutorial
react logging
- [x] react-jsonschema-form looks good (needs conditional support though)
how to do customise yeoman generators?
graphQL

#TODO

- [x] github
- JSX sublime text formatting + helpers for tags closing etc.
- [x] nodemon

##Minimal useful version

- [x] frontend for filling out form
- [x] form answers stored in db (mb some cloud json storage will do for now?)
- node recurring tasks
- daily email reminder
  - mailgun
  - gmail action button
- hosted somehow
- basic auth


## Level 2

- works on ios browser
- weekly summary

## Level 3
- integrations with other apps
- dashboard, charts
- mobile app via react native??


## Level 4
- multitenancy + definitely hosted
- real auth (maybe get creative? auth with iphone somehow)
- form builder
- configurable dashboard & summary views
