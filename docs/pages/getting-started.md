---
layout: "main.njk"
title: "Getting Started"
permalink: "/getting-started/"
---

# Carrot CSS

A cool and small CSS starter that gets you on going fast and right.

## Scope

Carrot CSS is a small starter library for your projects. It contains the minimum you need to start a project.

This library should be used by people that actually intend to write CSS, as it is not a component library, does not offers much styling and is not an utility library.
This is not meant to stops you from writing CSS, but to start your CSS from a right basis.

It is not meant to be a component library neither. Just some default style, some wwisely named design tokens and few cool classes.

## What's inside ?

### General

Just the minimum needed to have decent readability and nice contrast between title sizes and paragraphs.

### Utilities

These helps you going faster. Great layout utilities from [Every Layout](https://every-layout.dev/) will help reduce these `display: flex` and keep the layout DRYer. Some form fields and buttons classes to get you going and few utilities.

### Theming & Customization

We use CSS Variables to store palette color from _tailwind_, because they are nice. .

But we love how the design tokens gives you felxibility so we are _not_ using these palette c olors directly in the CSS, but rather from the **Design Tokens** defined in the theme file.
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
