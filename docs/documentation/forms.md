---
title: Forms
order: 90
---

# Forms element reset

Carrot CSS _does not_ provide any _pre-made_ form fields.
That's not the goal there, if you want to build a design system or a website you probably have some design for your fields.
And you might use an external library for custom selects and such, so the approach hewre is to not interfere with that.

Carrot CSS _does_ provides some reset for form elements form fields look more in place.
The reset itself just give you a sane base regarding margin and flow.

Here's what is done:

- No border and margin for `fieldset`, so we can use them for grouping fields without interfering with the layout
- `legend` looks like an h3, and titles utilitites classes (`.h1-like` to `h5-like`) can also be used
- All fields that _look like_ `text` fields have consistent padding and a `rem` defined height. They also have `box-sizing: border-box`. The `--form-field-height` can be overwritten to change that value, or even to `auto` to handle your height differently, with `padding-top` and `padding-bottom` for example
- `label`s are `inline-block` to handle margin and such
- `textarea` have default padding and only vertical resizing is allowed
- `button`, `input[type=submit]` and _friends_ have default padding. [Button classes](/documentation/buttons/) can be used to stylize them further
- `disabled` state is let to the _user agent_
- _No changes to `border` or `background`_, because...
  ✨ _`that's up to you!`_ ✨
  _(and let's be frank that'll be less properties to overwrite on your end)_

<form class="preview-dark">
  <fieldset class="stack">
    <legend>That's a default form legend</legend>
    <div>
      <label for="input">Example input</label>
      <input type="text" id="input" placeholder="Example input">
    </div>
    <div>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </div>
    <legend class="h2-like">Legend that use the `h2-like` class to look like an h2</legend>
    <div>
      <label>
        <input type="checkbox" value="">
        Checkbox label
      </label>
    </div>
    <div>
      <label>
        <input type="radio" name="radioValue" value="option1" checked="">
        Option one 
      </label>
      <label>
        <input type="radio" name="radioValue" value="option2">
        Option two 
      </label>
      <label>
        <input type="radio" name="radioValue" value="option3" disabled="">
        Disabled option
      </label>
    </div>
    <div>
      <label for="textarea">Example textarea</label><br/>
      <textarea id="textarea" rows="3" style="height: 118px;"></textarea>
    </div>
    <div>
      <label for="date">Example date</label>
      <input type="date" id="date">
    </div>
    <div>
      <label for="time">Example time</label>
      <input type="time" id="time">
    </div>
    <div>
      <label for="number">Example number</label>
      <input type="number" id="number">
    </div>
    <div>
      <label for="email">Example email</label>
      <input type="email" id="email">
    </div>
    <div>
      <label for="password">Example password</label>
      <input type="password" id="password">
    </div>
    <div>
      <label for="url">Example url</label>
      <input type="url" id="url">
    </div>
    <div>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="button" value="Input button">
      <button type="submit" disabled="true">Button submit</button>
    </div>
  </fieldset>
</form>
