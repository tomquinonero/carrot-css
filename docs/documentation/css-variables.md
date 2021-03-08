---
title: CSS Variables
order: 30
---

# CSS variables

Configuration is kept simple, you don't need to build anything.

We just use CSS variable that you can overwrite.

## What you might want to overwrite

Regarding fonts:

- You _should_ start by setting `--font-body` and `--font-headings` to your visual identity. You can also keep the [font sytem stack](https://css-tricks.com/snippets/css/system-font-stack/) on body to garantee readability and spare some sweet loading time!
- You _might_ want to overwrite the `--font-ratio` variable to something between `1.1` and `1.6`. The font ratio is the number per which we multiply the text size to obtain the heading sizes. You can try different ratio on <https://type-scale.com/>, or changing it directly on your app with your developper tool to fine-tune it.
- You _might_ want to overwrite `--font-line-height` to something else than `1.5`. But don't go too crazy there! You should keep it between `1.3` and `1.65` for body text.
- You _should probably not_ change anyth of the `--size-300` to `--size-900` values as these are calculated based on `--font ratio`.
- You _should probably not_ change the `--measure` value. It sets the maximum paragraph length, and is a nice default, [more info on the measure value on the Typography documentation page](/documentation/typography/).

Regarding theming:

```
TBA
```

## Full list of variables

<table>
<thead>
<tr><th>Variable name</th><th>Default value</th></tr>
</thead>
<tbody>
{% for cssVar in cssVars %}
{% if cssVar.type == "declaration" %}
<tr> <td>{{cssVar.property}}</td><td>{{cssVar.value}}</td></tr> {% endif %}
{% endfor %}
</tbody>
</table>
