# sass-vars-to-js

Example of **exporting SASS variables to JS** / TS with the help of [**CSS Modules**](https://github.com/css-modules/css-modules).

This project utilises _React_ and [Vue CLI](https://cli.vuejs.org/) (yes, I use Vue CLI for React projects).  
Usage with **create-react-app** should be the same.

The key part is `vars-to-js.module.scss`:

```scss
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

@each $_name, $_color in $theme-colors {
  @value #{$_name}: #{$_color};
}
```

When importing as a CSS module in `expose-sass-vars.ts`:

```typescript
export { default as sass } from "./vars-to-js.module.scss";
```

`sass` is an object containing theme colors:

```json
{
  "primary": "#007bff",
  "secondary": "#6c757d",
  "success": "#28a745",
  "info": "#17a2b8",
  "warning": "#ffc107",
  "danger": "#dc3545",
  "light": "#f8f9fa",
  "dark": "#343a40"
}
```
