---
layout: "main.njk"
title: "Getting Started"
permalink: "/getting-started/"
---

# Getting started

Start by adding this line to your `<head>`:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/carrot-css@0.2.3/dist/carrot.min.css"/>
```

You can also use a package manager, and we actually recommends that approach, [more on the Installation documentation](/documentation/installation/).

When Carrot CSS is imported, you're all set!

But you might want to overwrite some CSS variables, you can do that by defining them in a `:root` selector.

```css
:root {
  --font-headings: "Your title font", "And some backup ones", serif;
  --font-body: "You might want to keep that one the default system font stack";
  --size-400: 1.6rem;
}
```

Start by setting `--font-headings` to your visual identity.
Then you should select your base size for text by setting `--size-400` to an rem value.
It default to `1.4rem` and since the root font size is `10px`, it equals to `14px`.

This should be the most of it but [refer to the documentation](/documentation/css-variables/) for more informations.

About theming, Carrot CSS use some design tokens so you'll use color named by their usage, not an actual color name.
You'll use variables named like `--color-text-dark` or `--color-border` instead of `--dark-blue` or `--light-blue-200`.
It'll make way more sense and will make the theme easily switchable!

A Carrot CSS theme is actually just a list of design tokens and their values.

You should read [the theming documentation for more informations](#)

To use Carrot CSS you don't need to create your own theme. You can probably just overwrite the default one.

The branding color or main color is named `interactive color` in a theme. An interactive color would be used for buttons, links and anything you want to stand out in your designs.
These are the default interactive colors:

```css
:root {
  --color-interactive: var(--pink-400);
  --color-interactive-light: var(--pink-300);
  --color-interactive-lighter: var(--pink-200);
  --color-interactive-dark: var(--pink-500);
  --color-interactive-darker: var(--pink-600);
  --color-interactive--reverse: var(--pink-50);
}
```

In this example we use the existing colors from the existing palette included in Carrot CSS, and we set `light`, `lighter`, `dark` and `darker` for different constrasts. The `--color-interactive--reverse` will mostly be used for text having the `--color-interactive` as a background.
Here we used `pink-50` that is almost white, but still have that small saturation that will make it look better that pure `#fff`.
