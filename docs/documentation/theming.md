---
title: Color and Theming
order: 35
---

# Color and Theming

Carrot CSS embrace the concept of **Design Tokens**, a concept introduced by [@jina](https://twitter.com/jina) and you can read more about it there [on this post](https://css-tricks.com/what-are-design-tokens/) or check what [how Adobe handles their design tokens](https://spectrum.adobe.com/page/design-tokens/).

> Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc. — represented as data. These can represent anything defined by design: a color as a RGB value, an opacity as a number, an animation ease as Bezier coordinates. They’re used in place of hard-coded values in order to ensure flexibility and unity across all product experiences.

_From the [Design tokens documentation from Adobe design system](https://spectrum.adobe.com/page/design-tokens/)_

Carrot CSS use design tokens so you'll use color named by their _usage_, not an actual _color name_.
You'll use variables named like `--color-text-dark` or `--color-border` instead of `--dark-blue` or `--light-blue-200`.

To make it to _your_ colors, you can create a theme or edit the existing ones, `default` and `dark`.

## The simple way: Customize existing themes

Before thinking of creating a _full_ theme, you might want to just overwrite the existing colors that you need to overwrite. Most likely the `interactive` variables.
Your _branding color_ or _main color_ is what we name `interactive` color in a theme.
An interactive color would be used for buttons, links and anything you want to stand out in your designs.

This is how you can overwrite the `default` theme:

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

And this is how you can overwrite the `dark` one:

```css
.theme-dark {
  --color-interactive: var(--pink-400);
  --color-interactive-light: var(--pink-300);
  --color-interactive-lighter: var(--pink-200);
  --color-interactive-dark: var(--pink-500);
  --color-interactive-darker: var(--pink-600);
  --color-interactive--reverse: var(--pink-50);
}
```

When you have theme you can use them by using the `theme-default` or `theme-dark` on the element you need to theme.

<div class="preview theme-dark stack">
  <div class="box center">  
    This block is using the dark theme
  </div>
  <div class="box center theme-default">  
    This one is using the default theme
  </div>
</div>
