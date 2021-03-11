---
title: Tables
order: 90
---

# Tables

> Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be opt-in. Just add the base class `.table` to any table, then extend with custom styles or our various included modifier classes.

_From the [Bootstrap table documentation](https://getbootstrap.com/docs/5.0/content/tables/)_

In carrot CSS we'll act the same, so you'll need to be manually add the `table` class to the table you want to stylize.

## Examples

A table of sega consoles

<table class="table" >
<thead>
<tr><th>Name</th><th>Date of release</th></tr>
</thead>
<tbody>
<tr><td>Master System</td><td>1985</td></tr>
<tr><td>Mega Drive (Genesis)</td><td>1988</td></tr>
<tr><td>Game Gear</td><td>1990</td></tr>
<tr><td>Saturn</td><td>1994</td></tr>
<tr><td>Dreamcast</td><td>1998</td></tr>
</tbody>
</table>

Make a table vertical scrool by wrapping it in a container with the `reel` class. [Learn more about the reel layout utility](/documentation/layout-utilities/#the-reel).

<div class="reel">
<table class="table text-nowrap" >
<thead>
<tr><th>Name</th><th>Date of release</th><th>Filler</th></tr>
</thead>
<tbody>
<tr><td>Master System</td><td>1985</td><td>Some quite long text that will surely make the table bigger than the container. Let's make sure this text is long enough for the largest screens like 1440p or 4k or even the brand new 8k screen size, but you'll probably need a beefy GPU anyway.</td></tr>
<tr><td>Mega Drive (Genesis)</td><td>1988</td><td>Some quite long text that will surely make the table bigger than the container. Let's make sure this text is long enough for the largest screens like 1440p or 4k or even the brand new 8k screen size, but you'll probably need a beefy GPU anyway.</td></tr>
<tr><td>Game Gear</td><td>1990</td><td>Some quite long text that will surely make the table bigger than the container. Let's make sure this text is long enough for the largest screens like 1440p or 4k or even the brand new 8k screen size, but you'll probably need a beefy GPU anyway.</td></tr>
<tr><td>Saturn</td><td>1994</td><td>Some quite long text that will surely make the table bigger than the container. Let's make sure this text is long enough for the largest screens like 1440p or 4k or even the brand new 8k screen size, but you'll probably need a beefy GPU anyway.</td></tr>
<tr><td>Dreamcast</td><td>1998</td><td>Some quite long text that will surely make the table bigger than the container. Let's make sure this text is long enough for the largest screens like 1440p or 4k or even the brand new 8k screen size, but you'll probably need a beefy GPU anyway.</td></tr>
</tbody>
</table>
</div>
