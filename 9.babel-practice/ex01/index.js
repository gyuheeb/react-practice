const babel = require('@babel/core');

const source = 'const fn = () => 1;' ;
// const fn = function(){
//     return 1;
// };

const result = babel.transform(source, {}); //ES5로 변경

console.log(result);