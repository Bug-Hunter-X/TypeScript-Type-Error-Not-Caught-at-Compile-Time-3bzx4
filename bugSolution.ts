function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number | string {
  if (typeof b === 'string') {
    return a + parseFloat(b); 
  } else {
    return a + b; 
  }
}

let result1 = addSafe(5, '10'); // Returns 15
let result2 = add(5,10); // Returns 15
let result3 = addSafe(5, 10); // Returns 15