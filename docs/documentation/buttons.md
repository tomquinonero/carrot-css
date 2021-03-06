---
title: Buttons
order: 80
---

# Buttons

Carrot-css provides you with a `button` class for you to use. It includes different semantic buttons, some different sizes and some outline.

To use them you must use the `button` class _in addition_ to any modifier you'll use. We use the [BEM methodology](http://getbem.com/introduction/) so modifier will all start with `button--`.

[See `_buttons.scss` file on Github](https://github.com/tomquinonero/carrot-css/blob/main/css/_buttons.scss)

## Semantic buttons

Rather than have classes with the name of colors like `button-red`, we provide _semantic_ names that define the **role** of the button.
A **primary** button will be draw attention and stand-out, while a **danger** should be used for _dangerous_ actions like deleting an item or blocking an user. **Neutral** button can be use for some secondary actions that should not get the user out of his focus.
We also provides _warning_, _success_ and a _reverse_ button.

Examples:

<div class="preview cluster">

<button class="button button--neutral">Neutral Button</button><button class="button button--primary">Primary Button</button><button class="button button--danger">Danger Button</button><button class="button button--success">Success Button</button><button class="button button--warning">Warning Button</button><button class="button button--reverse">Reverse Button</button>

</div>

```html
<button class="button button--neutral">Neutral Button</button>
<button class="button button--primary">Primary Button</button>
<button class="button button--danger">Danger Button</button>
<button class="button button--success">Success Button</button>
<button class="button button--warning">Warning Button</button>
<button class="button button--reverse">Reverse Button</button>
```

## Other modifiers

We provide you with `button--small` and `button--large` for different sizes.

<div class="preview cluster">

<button class="button button--neutral button--large">Large Button</button><button class="button button--primary button--large">Large Primary Button</button>

<button class="button button--neutral">Default Size Button</button><button class="button button--primary">Default Size Primary Button</button>

<button class="button button--neutral button--small">Small Button</button><button class="button button--primary button--small">Small Primary Button</button>

</div>

Also you can use the `button--outline` class for an outline style. _Neutral and reverse buttons have no outline implementation, as it seems not needed_.

<div class="preview cluster">

<button class="button button--outline button--primary">Primary Button</button><button class="button button--outline button--danger">Danger Button</button><button class="button button--outline button--success">Success Button</button><button class="button button--outline button--warning">Warning Button</button>

</div>

Disabled state can be applied to the buttons via a `disabled` attribute, a `disabled` class or a `button--disabled` class. The preferred method should be the `disabled` **attribute** as it automatically exclude the button from keyboard navigation.

<div class="preview cluster">

<button disabled class="button">Button `disabled` attribute</button><button disabled class="button button--primary">Primary Button `disabled` attribute</button><button class="button button--danger disabled">Danger Button `disabled` class</button><button class="button button--success button--disabled">Success Button `button--disabled` class</button>

</div>

```html
<button disabled class="button">Button disabled</button>
<button disabled class="button button--primary">Primary Button disabled</button>
<button class="button button--danger disabled">Danger Button disabled</button>
<button class="button button--success button--disabled">
  Success Button disabled
</button>
```

## Overwrite default or create your own button

You might to want to create more button variants or overwrite default styles. It is made fairly simple.
This is how `button--primary` could be overwritten:

```css
.button--primary {
  background-color: #111;
  border-color: #000;
  color: #fff;
  outline-color: #111;
}
.button--primary:hover {
  background-color: #222;
}
```

If you want to handle the **outline** modifier you'll need to add the following to you CSS:

```css
.button--outline.button--primary {
  color: #111;
}
.button--outline.button--primary:hover {
  background-color: #111;
}
```
