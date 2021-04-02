---
layout: "main.njk"
title: "Getting Started"
permalink: "/getting-started/"
containerClass: "page--getting-started"
---

# Getting started

This is a quick guide to get started. Read the [documentation](/documentation/) for more details.

## Step 1: Installation

Start by adding this line to your `<head>`:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/carrot-css@0.2.3/dist/carrot.min.css"/>
```

You can also use a package manager, and we actually recommends that approach, [more on the Installation documentation](/documentation/installation/).

When Carrot CSS is imported, you're all set!

## Step 2: Font and Sizes

But you might want to overwrite some CSS variables, you can do that by defining them in a `:root` selector.

Here's what it would like like:

```css
:root,
.theme-default {
  --font-headings: "Your title font", "And some backup ones", serif;
  --font-body: "You might want to keep that one the default system font stack";
  --size-400: 1.6rem;
}
```

- `--font-headings` and `--font-body` are the font for your design
- `--size-400` is the base size that'll be used to calculate the other `--size`s variables via the `--ratio` value. It should be using `rem`. Know that the root font size is `10px` so `1.4rem == 14px`. More about font sizes and ratio on the [Typography documentation page](/documentation/typography/)

This should be the most of it but [refer to the documentation](/documentation/css-variables/) for more informations.

## Step 3: Colors and Theming

About theming, Carrot CSS use some **design tokens** so you'll use color named by their _usage_, not an actual _color name_.
You'll use variables named like `--color-text-dark` or `--color-border` instead of `--dark-blue` or `--light-blue-200`.

It'll make way more sense and will make the theme easily switchable!

_A Carrot CSS theme is actually just a list of design tokens and their values._

You should read [the theming documentation for more informations](#).

To use Carrot CSS you don't need to create your own theme. You can probably just overwrite the `default` one and the `dark` one to put it your `interactive` colors.

Your _branding color_ or _main color_ is what we name `interactive` color in a theme.
An interactive color would be used for buttons, links and anything you want to stand out in your designs.

These are how you should start:

```css
:root,
.theme-default {
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
