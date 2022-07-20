// Set - 데이터 중복 불허
const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));//찾음
s.delete('one');
console.log(s.has('one'));
console.log(s.has('two'));