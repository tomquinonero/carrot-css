---
title: Introduction
order: 1
---

# Carrot CSS

Carrot CSS is a **CSS Starter** or _micro-framework_, it is _not_ a framework as it does and asssume way less, but this is _more than_ a reset, as it give you a _sane boilerplate_ for you to write your own CSS code.

If you want to write your CSS but you are tired of writting the same starter code on every projects, **Carrot CSS is for you!**
If you want to write clean CSS that _actually_ scales and you want to be sure to get of on the right foot with your CSS, **Carrot CSS is for you!**

Carrot CSS is a stable foundation for your projects, it is lightweight and CSS only. It use CSS variables and have built-in theme support, and the whole thing is understandable and easily customizable.
And also, _Carrot CSS don't go too far_, it only weight `4.2kB` gzipped and does just what you need, no more.

This library should be used by people that actually intend to write CSS, as it is not a component library, does not offers much styling and is not an utility library.
This is not meant to stops you from writing CSS, but to start your CSS from a right basis.

## The three components of Carrot CSS

Carrot CSS code can be sorted into three main components:

<div class="grid">
<div>

### Style reboot

- A modern CSS reset
- The "system font stack" by default
- Forms element reboot so they are consistent and ready to customize
</div>
<div>

### Sane base

- All the CSS variables needed to get start, well named
- A great typography sizing system based on a changeable ratio
- A theming support, with light and dark themes built-in
</div>
<div>

### Utilities

- A great color palette to pick from
- Layout utilities so you don't have to write the same concepts agin and agin
- Hand picked utilities
- Buttons you can chose from
</div>
</div>

## What's inside ?

### General

Just the minimum needed to have decent readability and nice contrast between title sizes and paragraphs.

### Utilities

These helps you going faster. Great layout utilities from [Every Layout](https://every-layout.dev/) will help reduce these `display: flex` and keep the layout DRYer. Some form fields and buttons classes to get you going and few utilities.

### Theming & Customization

We use CSS Variables to store palette color from _tailwind_, because they are nice. .

But we love how the design tokens gives you felxibility so we are _not_ using these palette colors directly in the CSS, but rather from the **Design Tokens** defined in the theme file.
A **theme** is a _group of CSS variables_ that defines colors for the application.
The tokens that are not related to colors exists also as CSS variables.
To configure the tokens, you can use our [Variables template](#) that you can use to overwrite variables.

### List of tools

- A small reset: **[modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)**
- Some base CSS to improve **readability and vertical rythm**, largely inspired by this post: <https://piccalil.li/tutorial/improve-the-readability-of-the-content-on-your-website>
- Layouts utilities from the book **[Every Layout](https://every-layout.dev/)**
- Some UI **Buttons** classes
- Default pretty styles for **Forms Field**
- [Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors), as **CSS variables**
- A list of Design Tokens for colors, refering to _Tailwind_ palette, forming a **theme**

_...And not one line of JavaScript!_
