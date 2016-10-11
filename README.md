
#React

- Few components should have state, if components have no state they can be written as pure functions
- `props.children` is the inner content of component
- `props` is owned by parent and is *immutable*, `state`
    is component's private  state and is *mutable*, it's reserved for interactivity
- `getInitialState()` initial state when component first rendered
- `componentDidMount()` called after a component is rendered for the first time
- spread attributes like `<Component {...props} />`


react project file structure
~transclusion~
unit testing
  - how to mock stuff without DI
react redux tutorial
how does the app "require" styles?
hotloading tutorial vid
react logging
react-jsonschema-form looks good

#TODO

- github
- JSX sublime text formatting + helpers for tags closing etc.

##Minimal useful version

- frontend for filling out form
- form answers stored in db (mb some cloud json storage will do for now?)
- hosted somehow
- daily email reminder
  - mailgun


## Level 2

- form builder
- works on ios browser
- weekly summary
- auth (maybe get creative? auth with iphone somehow)
- multitenancy + definitely hosted
- own backend
- email actions (gmail)

## Level 3
- integrations with other apps
- dashboard, charts


## Level 4
- configurable dashboard & summary views
- mobile app via react native??
