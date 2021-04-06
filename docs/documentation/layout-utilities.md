---
title: Layout Utilities
order: 50
---

# Layout utilities

Layout utilities are **largely** inspired from the [every layout book](https://every-layout.dev/).
This is great book and you should probably [buy it and read it](https://every-layout.dev/checkout/).
It will make you understand better how CSS works.

[See `_layout_utilities_.scss` file on Github](https://github.com/tomquinonero/carrot-css/blob/main/css/_layout_utilities_.scss)

Carrot CSS provides utilities classes that comes from the book.
No advanced documentation here, as it is available on the [every layout website](https://every-layout.dev/). Also there is gold free content there so even if you don't plan of buying the book, there is still a lot to learn!

## The stack

Makes items vertically stack, put an even space between them and remove top margin from first item and bottom margin from the last.
_You'll need an intermediate container to make it work._

```html
<div class="stack">
  <div>
    <h2>First item</h2>
    <p>Cupidatat irure mollit aute commodo.</p>
    <p>
      Officia exercitation qui veniam reprehenderit pariatur laboris elit dolor
      reprehenderit mollit laborum cupidatat labore.
    </p>
    <p>
      Occaecat deserunt ad pariatur aute dolor laboris anim commodo exercitation
      Lorem sint.
    </p>
    <p>Officia exercitation esse veniam consequat quis eiusmod aliqua.</p>
  </div>
</div>
```

<div class="preview-dark stack">
  <div>
    <p class="h2-like">First item</p>
    <p>Cupidatat irure mollit aute commodo.</p>
    <p>Officia exercitation qui veniam reprehenderit pariatur laboris elit dolor reprehenderit mollit laborum cupidatat labore.</p>
    <p>Occaecat deserunt ad pariatur aute dolor laboris anim commodo exercitation Lorem sint.</p>
    <p>Officia exercitation esse veniam consequat quis eiusmod aliqua.</p>
  </div>
</div>

## The Box

A box. Will apply default margin, default border and a background.

```html
<div class="box">What's inside the box</div>
```

<div class="preview-dark">
  <div class="box">
    What's inside the box
  </div>
</div>

[Documentation on Every Layout](https://every-layout.dev/layouts/box/)

## The Center

Horizontally center en element. Will apply [`--measure`](/documentation/typography/#the---measure-of-content) as a max-width.

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/center/)

```html
<div class="center">
  Anim velit velit anim duis ipsum sit aliquip id labore minim ad. Labore sit id
  laborum qui ad consequat elit esse. Incididunt esse ipsum elit proident non
  reprehenderit. Ipsum excepteur cillum excepteur do nostrud proident deserunt
  incididunt sint.
</div>
```

<div class="preview-dark">
  <div class="center">
    Anim velit velit anim duis ipsum sit aliquip id labore minim ad. Labore sit id laborum qui ad consequat elit esse. Incididunt esse ipsum elit proident non reprehenderit. Ipsum excepteur cillum excepteur do nostrud proident deserunt incididunt sint.
  </div>
</div>

## The Cluster

Will stack item horizontally and provides consistent spacing.

```html
<div class="cluster">
  <div>
    <img src="https://via.placeholder.com/200x200" />
    <img src="https://via.placeholder.com/200x200" />
    <img src="https://via.placeholder.com/200x200" />
    <img src="https://via.placeholder.com/200x200" />
    <img src="https://via.placeholder.com/200x200" />
    <img src="https://via.placeholder.com/200x200" />
  </div>
</div>
```

<div class="preview-dark cluster">
  <div>
    <img src="https://via.placeholder.com/200x200"/>
    <img src="https://via.placeholder.com/200x200"/>
    <img src="https://via.placeholder.com/200x200"/>
    <img src="https://via.placeholder.com/200x200"/>
    <img src="https://via.placeholder.com/200x200"/>
    <img src="https://via.placeholder.com/200x200"/>
  </div>
</div>

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/cluster/)

## The Sidebar

Put an element on the side.
_You'll need an intermediate container to make it work._

```html
<div class="preview-dark with-sidebar">
  <div>
    <div>
      <h3>Sidebar</h3>
      <p>Hey</p>
    </div>
    <div>
      <h3>Main</h3>
      <p>
        Deserunt et sint sunt ex veniam cupidatat esse ad ullamco culpa ullamco
        officia. Lorem velit nostrud aute occaecat tempor ipsum consequat in
        officia esse nisi. Officia ea consectetur nisi culpa elit ut eu mollit
        consectetur do cillum.
      </p>
    </div>
  </div>
</div>
```

<div class="preview-dark with-sidebar">
  <div>
    <div>
      <h3>Sidebar</h3>
      <p>Hey</p>
    </div>
    <div>
      <h3>Main</h3>
      <p>Deserunt et sint sunt ex veniam cupidatat esse ad ullamco culpa ullamco officia. Lorem velit nostrud aute occaecat tempor ipsum consequat in officia esse nisi. Officia ea consectetur nisi culpa elit ut eu mollit consectetur do cillum.</p>
    </div>
  </div>
</div>

[Documentation on Every Layout](https://every-layout.dev/layouts/sidebar/)

## The Switcher

Will displayed element side to side if they all fit or vertically stacked if they don't. No weird looking middle ground.

_You'll need an intermediate container to make it work._

```html
<div class="preview-dark stack">
  <p class="h2-like">If it fits</p>
  <div class="switcher">
    <div>
      <img src="https://via.placeholder.com/100x100" />
      <img src="https://via.placeholder.com/100x100" />
    </div>
  </div>
  <p class="h2-like">If it does not fit</p>
  <div class="switcher">
    <div>
      <img src="https://via.placeholder.com/600x600" />
      <img src="https://via.placeholder.com/600x600" />
    </div>
  </div>
</div>
```

<div class="preview-dark stack">
  <p class="h2-like">If it fits</p>
  <div class="switcher">
    <div>
      <img src="https://via.placeholder.com/100x100"/>
      <img src="https://via.placeholder.com/100x100"/>
    </div>
  </div>
  <p class="h2-like">If it does not fit</p>
  <div class="switcher">
    <div>
      <img src="https://via.placeholder.com/600x600"/>
      <img src="https://via.placeholder.com/600x600"/>
    </div>
  </div>
</div>

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/switcher/)

## The Cover

Will have an height of `100vh`, useful for a section that need to cover the whole screen.

As we don't want to break the layout we will not show an example here.

[Documentation on Every Layout](https://every-layout.dev/layouts/cover/)

## The Grid

A grid that will wrap elements if they are less than 12 rem.

```html
<div class="grid">
  <div>
    <p>
      Tempor ipsum ex sit nostrud commodo. Adipisicing reprehenderit excepteur
      laborum proident sunt cillum laboris cillum eu velit enim nisi. Et in
      consectetur veniam esse consectetur proident quis labore laborum
      consectetur ut. Ipsum pariatur pariatur adipisicing magna culpa nostrud.
    </p>
  </div>
  <div>
    <p>
      Culpa qui irure reprehenderit ea est. Labore ullamco pariatur exercitation
      ex. Nisi commodo exercitation ipsum deserunt ullamco ex eiusmod aute.
    </p>
  </div>
  <div>
    <p>
      Cupidatat nisi laborum eu aute deserunt ullamco commodo elit magna dolor.
      Aliqua laboris ut nostrud proident eu occaecat aliquip do sit irure elit.
      Dolor ut est pariatur magna ullamco minim. Ad officia mollit incididunt
      aute velit elit. Incididunt Lorem officia officia in duis aliquip laboris
      laborum eiusmod tempor. Culpa exercitation aliqua minim dolore elit
      deserunt.
    </p>
  </div>
</div>
```

<div class="preview-dark grid">
  <div>
    <p>Tempor ipsum ex sit nostrud commodo. Adipisicing reprehenderit excepteur laborum proident sunt cillum laboris cillum eu velit enim nisi. Et in consectetur veniam esse consectetur proident quis labore laborum consectetur ut. Ipsum pariatur pariatur adipisicing magna culpa nostrud.</p>
  </div>
  <div>
    <p>Culpa qui irure reprehenderit ea est. Labore ullamco pariatur exercitation ex. Nisi commodo exercitation ipsum deserunt ullamco ex eiusmod aute.</p>
  </div>
  <div>
    <p>Cupidatat nisi laborum eu aute deserunt ullamco commodo elit magna dolor. Aliqua laboris ut nostrud proident eu occaecat aliquip do sit irure elit. Dolor ut est pariatur magna ullamco minim. Ad officia mollit incididunt aute velit elit. Incididunt Lorem officia officia in duis aliquip laboris laborum eiusmod tempor. Culpa exercitation aliqua minim dolore elit deserunt.</p>
  </div>
</div>

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/grid/)

## The Frame

A fixed ratio container. defaults to 16/9 but the ratio can be changed overwriting `--h` and `--w` for your frame.

```html
<div class="frame" style="background: var(--blueGray-400)">
  <p>This content will always keep a 16/9 ratio.</p>
</div>
<br />
<div class="frame" style="--h: 1; --w: 1; background: var(--blueGray-400)">
  <p>This content will always keep a 1/1 ratio.</p>
</div>
```

<div class="preview-dark">
  <div class="frame" style="background: var(--blueGray-400)">
    <p>This content will always keep a 16/9 ratio.</p>
  </div>
  <br>
  <div class="frame" style="--h: 1; --w: 1; background: var(--blueGray-400)">
    <p>This content will always keep a 1/1 ratio.</p>
  </div>
</div>

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/frame/)

## The Reel

Provides an horizontal scrolling context.

```html
<div>
  <p>
    Tempor ipsum ex sit nostrud commodo. Adipisicing reprehenderit excepteur
    laborum proident sunt cillum laboris cillum eu velit enim nisi. Et in
    consectetur veniam esse consectetur proident quis labore laborum consectetur
    ut. Ipsum pariatur pariatur adipisicing magna culpa nostrud.
  </p>
</div>
<div>
  <p>
    Culpa qui irure reprehenderit ea est. Labore ullamco pariatur exercitation
    ex. Nisi commodo exercitation ipsum deserunt ullamco ex eiusmod aute.
  </p>
</div>
<div>
  <p>
    Cupidatat nisi laborum eu aute deserunt ullamco commodo elit magna dolor.
    Aliqua laboris ut nostrud proident eu occaecat aliquip do sit irure elit.
    Dolor ut est pariatur magna ullamco minim. Ad officia mollit incididunt aute
    velit elit. Incididunt Lorem officia officia in duis aliquip laboris laborum
    eiusmod tempor. Culpa exercitation aliqua minim dolore elit deserunt.
  </p>
</div>
```

<div class="preview-dark reel">
  <div>
    <p>Tempor ipsum ex sit nostrud commodo. Adipisicing reprehenderit excepteur laborum proident sunt cillum laboris cillum eu velit enim nisi. Et in consectetur veniam esse consectetur proident quis labore laborum consectetur ut. Ipsum pariatur pariatur adipisicing magna culpa nostrud.</p>
  </div>
  <div>
    <p>Culpa qui irure reprehenderit ea est. Labore ullamco pariatur exercitation ex. Nisi commodo exercitation ipsum deserunt ullamco ex eiusmod aute.</p>
  </div>
  <div>
    <p>Cupidatat nisi laborum eu aute deserunt ullamco commodo elit magna dolor. Aliqua laboris ut nostrud proident eu occaecat aliquip do sit irure elit. Dolor ut est pariatur magna ullamco minim. Ad officia mollit incididunt aute velit elit. Incididunt Lorem officia officia in duis aliquip laboris laborum eiusmod tempor. Culpa exercitation aliqua minim dolore elit deserunt.</p>
  </div>
</div>

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/reel/)

## The Imposter

Will ignore the flow and be centered to the viewport. It is what you would use for a modal window.

We will not provide example there to not break the layout.

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/imposter/)

## The Icon

Provide the `icon` class to apply to an icon and a `with-icon` to apply to the container.

[Documentation on Every Layout (Needs the book to be purchased)](https://every-layout.dev/layouts/icons/)
