# 🌾🌾 Paddy
JavaScript module for inserting character padding into a string.

## Purpose

Paddy allows you to insert a padding of desired length and content within a string.

### Example

```js
const pad           = paddy(4, '👻');
const simplePhrase  = `${pad}I love simple tabs!`;
const complexPhrase = `${pad}I love ghost tabs!`;

console.log(simplePhrase);  // "    I love simple tabs!"
console.log(complexPhrase); // "👻👻👻👻I love ghost tabs!"
```
