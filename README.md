# rallax-component

> a parallax scrolling component inspired by [rallax.js](https://github.com/ChrisCavs/rallax.js)

[![NPM](https://img.shields.io/npm/v/rallax-component.svg)](https://www.npmjs.com/package/rallax-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rallax-component
```

## Usage

```jsx
import React, { Component } from 'react'

import Rallax from 'rallax-component'

class Example extends Component {
  render () {
    return (
      <Rallax
        options={}
        when={}
        child={}
      >
        {
          <SomeChildrenComponent />
        }
      </Rallax>
    )
  }
}
```

## Param

### options

#### speed

Accepts a float number.

At a speed of 0, the target will scroll like a static element. At a speed of 1, the target will appear fixed (will move at the speed of scroll). At even higher speeds, the target will move quicker than the speed of scroll.

#### mobilePx

Accepts an integer, as number of pixels.

Pass this option if you want parallax for this target to automatically be disabled at a certain screen width.

#### when

a array like this:

```js
const whenProps = [
      {
        condition: () => window.scrollY > 750,
        action: parallax => parallax.stop()
      },
      {
        condition: () => window.scrollY < 750,
        action: parallax => parallax.start()
      }
    ]
```

the property of the when param must be 'condition' or 'action',and it's a function.

#### child

bool, if true, the rallax will bind with the child node.

## Refrence

[rallax.js](https://github.com/ChrisCavs/rallax.js)

## License

MIT © [cbbfcd](https://github.com/cbbfcd)
