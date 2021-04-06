---
title: Installation
order: 20
---

# Installing Carrot CSS

We recommend using a package manager like [yarn](http://yarn.com) or [npm](https://www.npmjs.com/) and keep it updated, but you can also use our CDN.

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

## Using a CDN

You can also use a CDN and get the last version:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/carrot-css@0.2.0/dist/carrot.min.css">
```

<div class="nota-bene">

Be sure to _import or load carrot css_ **before** any of your CSS! **It should be loaded before any CSS**

You want to be able to overwrite values without _artificially_ bumping the [selector specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). In CSS, if the specificity is the same, the last declared rule is applied so you can just declare CSS variable to overwrite default.

</div>

## What to do now?

You should probably overwrite some CSS variables to make it your own and you should be good to go.See more on our [Getting Started guide](/getting-started/), check the [Documentation](/documentation) or just start coding 😀
