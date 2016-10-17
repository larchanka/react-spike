# Components flow

All the components **shouldn't be** connected to the stores. All the big components have to be splitted on the bunch of small stateless components. Data for them have to be passed through the properties.

```javascript
const Header = props => (
  <{props.headerType}>
    {props.text}
  </{props.headerType}>
)
```

Put the styles (scss/less/stylus/css), utils, tests to the same folder. Don't forget to create folder `styles` within the component's folder:

- components
  - Header
    - styles
      - index.scss
      - index.css
    - Header.js
    - Header.test.js
    - index.js
    - utils.js

This approach allows to create the reusable components, and easy extract'em from the whole project if necessary.

If something is coming from `context`, create a wrapper component, which will pass this 'something' further through the properties.

## Modules

If some component is going to be a reusable module, add `package.json` to the component's root folder.
