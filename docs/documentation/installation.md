---
title: Installation
---

# Installing Carrot CSS

We recommend using a package manager like [yarn](http://yarn.com) or [npm](http://npm.org) and install the `carrot-css` package, but you can also use our CDN.

## Using a package manager

Install `carrot-css` using a package manager:

```
// using yarn
yarn add carrot-css

// using npm
npm install carrot-css
```

Then you can import it in your SASS files:

```
// Depending on your stack, one of these lines will work
@import 'node_modules/carrot-css/dist/carrot.css'
@import 'carrot-css/dist/carrot.css'
@import url("~carrot-css");
```

Or import it in your JS file:

```
import "carrot-css"
```

<div class="nota-bene">

Be sure to import _carrot css_ **before** any of your CSS!
You want to be able to overwrite values without _artificially_ bumping the [selector specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

</div>
