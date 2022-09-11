function add1(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// console.log(add1(5,9));
// console.log(add1('5','9'));
// console.log(add1('5',9));
// console.log(add1(5,'9'));
// console.log(add1(true, false));


let result: number | string;
result = 10; // OK
// console.log(result);
result = 'Hi'; // also OK
// console.log(result);
result = false; // a boolean value, not OK
// console.log(result);


function add2(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// console.log(add2(5,9));
// console.log(add2('5','9'));
// console.log(add2('5',9));
// console.log(add2(5,'9'));
// console.log(add2(true, false));