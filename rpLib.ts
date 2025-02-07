


export const divMod = (quotient : number, divisor : number): {result: number, mod: number} => {
	return { result: Math.floor(quotient / divisor), mod: quotient % divisor };
};

export function* inclusiveRange(first: number, last: number): Generator<number> {
    for (let i = first; i <= last; i++) {
      yield i;
    }
}
