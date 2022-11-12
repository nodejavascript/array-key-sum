### Install

```bash
  npm i @nodejavascript/array-key-sum
```

### Usage

```js

import arrayKeySum from '@nodejavascript/array-key-sum'

const sampleArray = [
  {
    id: 1,
    name: 'Foo',
    cost: 4.50
  },
  {
    id: 2,
    name: 'Bar',
    cost: 4.50
  },
  {
    id: 3,
    name: 'Bar',
    cost: 3.50
  }
]

const sumOfCost = arrayKeySum(sampleArray, 'cost')

// sumOfCost => 12.5

const sumOfCostFoo = arrayKeySum(sampleArray.filter(i => i.name === 'Foo'), 'cost')
const sumOfCostBar = arrayKeySum(sampleArray.filter(i => i.name === 'Bar'), 'cost')

// sumOfCostFoo => 4.5
// sumOfCostBar => 8
```

### Links

- [Github](https://github.com/nodejavascript)
- [Blog](https://nodejavascript.com/)
