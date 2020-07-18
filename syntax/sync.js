var fs = require('fs');

/*
//readFileSync

console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
출력 결과(순서) : A -> B -> C
*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(error, result){
    console.log(result);
});
console.log('C'); // 출력 결과(순서) : A -> C -> B 