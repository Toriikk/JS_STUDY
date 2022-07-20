// Set - 중복 불허

const arr = ['one', 'two', 'three', 'two', 'one', 'four'];
const s = new Set(arr);
console.log([...s]);