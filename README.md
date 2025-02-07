# rplib

Library routines for TypeScript projects.

---
### divMod - function

Perform a division returning the whole result and the modulus value.

Signature: 
```
const divMod = (quotient : number, divisor : number): {result: number, mod: number}`
```

Usage:
```	
const { result, mod } = divMod(rows, pageSize);
```	

---
### inclusiveRange - generator function

Provide an iterator to loop over a an inclusive range. This lets you write a declarative loop; it is an alternative to:

Instead of:

```
for (let i = 1; i <= 10; i++) {
    blah
}
```

do this:

```
for (const i of inclusiveRange(1, 10)) {
    blah
}
```

This is an inclusive loop and processes from the first value to the last value provided, inclusively.

Signature:
```
function* inclusiveRange(first: number, last: number): Generator<number>
```

Usage:
```
for (const num of inclusiveRange(pageInfo.first, pageInfo.lastRow)) {
    console.log(simpleArray[num]);
}
```