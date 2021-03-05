---
layout: "main.njk"
title: Typography
---

# Typography

Carrot CSS defines the default text sizes, based on a ratio between sizes. Here's a look at the default sizes:

<pre language="css">
:root {
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;
}
</pre>

There is one font for all the titles and one for the content.

This is how title look and play together:

<div class="grid">
  <div>

# Title 1

## Title 2

### Title 3

#### Title 4

##### Title 5

  </div>
  <div>
  
# Title 1
Content after an h1.
## Title 2
Content after an h2.
### Title 3
Content after an h3.
#### Title 4
Content after an h4.
##### Title 5
Content after an h5.
  </div>
</div>
