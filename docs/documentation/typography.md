---
title: Typography
---

# Typography

We want you to not struggle with setting nice base typographic rule.
You should only chose your font and be good to go.

## Font sizes

Carrot CSS defines the default text sizes, based on a ratio between sizes. The default ratio is `1.33`.
Here's a look at the default sizes:

```
:root {
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;
}
```

There is one font for all the titles and one for the content.

You can override the ratio by changing the `--font-ratio` CSS variable.

This is how title look and play together:

<div class="preview">

<p class="h1-like">Title 1</p>

Content after an h1.

<p class="h2-like">Title 2</p>

Content after an h2.

<p class="h3-like">Title 3</p>

Content after an h3.

<p class="h4-like">Title 4</p>

Content after an h4.

<p class="h5-like">Title 5</p>

Content after an h5.

</div>

## Titles aliases

Sometimes you need an `H2` to look like an `H3`, so Carrot CSS provides classes to help you accomplish that:

```
<h2 class="h3-like">An H2 that looks like an H3</h2>
```

You can use `h1-like`, `h2-like`, `h3-like`, `h4-like` and `h5-like` classes to make a _lookalike_ element.