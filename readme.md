# A stupid simple Dropdown element

Basic dropdown script in vanilla es6 js.

- Multiple instances
- Uses stateful css classes, ie: `is-open`, `is-closed`
- Transitions via simple css keyframes
- Click outside Dropdown to close
- Close on Esc key
- Basic boiler scss included, though it's just ripped out of a project, so toates untested brah. Have fun.


## Usage

```
// app.js or whatevers

import Dropdowns from './components/Dropdowns.js'

Dropdowns.init()

```


## Structure

```
<div class="dropdown js-dropdown">
  <button class="dropdown__label js-dropdown-trigger" type="button" aria-haspopup="true" aria-expanded="false">
    Filters
    <span></span>
  </button>
  <nav class="dropdown__main">
    <div class="dropdown__modal">
      <div class="dropdown__scroller">
        <!-- Johnny Content was here -->
      </div>
    </div>
  </nav>
</div>
