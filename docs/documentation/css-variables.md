---
title: CSS Variables
order: 30
---

# CSS variables

Configuration is kept simple, you don't need to build anything.

We just use CSS variable that you can overwrite.

## What you might want to overwrite

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
