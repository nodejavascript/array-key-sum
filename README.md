# @nodejavascript/array-key-sum

Adding one field across a list is the kind of thing that gets written by hand, slightly differently, in five
places. This is the one small function that does it — given an array and the name of a numeric key, it returns
the sum.

## Install

```bash
npm i @nodejavascript/array-key-sum
```

## Usage

```js
const { arrayKeySum } = require('@nodejavascript/array-key-sum')

const sampleArray = [
  { id: 1, name: 'Foo', cost: 4.5 },
  { id: 2, name: 'Bar', cost: 4.5 },
  { id: 3, name: 'Bar', cost: 3.5 }
]

arrayKeySum(sampleArray, 'cost')
// => 12.5

arrayKeySum(sampleArray.filter((i) => i.name === 'Foo'), 'cost')
// => 4.5

arrayKeySum(sampleArray.filter((i) => i.name === 'Bar'), 'cost')
// => 8
```

## What it guarantees

- **A missing array or key throws**, rather than returning a number that looks like an answer:
  `arrayKeySum requires array` / `arrayKeySum requires key`.
- **An empty array returns `0`**, so a filter that matches nothing sums to zero instead of `undefined`.
- **A missing key on the objects returns `0`** rather than `NaN` in your totals.

## Links

- [GitHub](https://github.com/nodejavascript)
- [nodejavascript.com](https://nodejavascript.com/)

## Licence

MIT — see [LICENSE](./LICENSE).
