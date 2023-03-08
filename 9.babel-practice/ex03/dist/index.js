// 블록 스코프 변수(ES6)
const users = [{
  no: 1,
  name: '마이콜',
  email: ' michol@gmail.com'
}, {
  no: 2,
  name: '루피',
  email: ' roopy@gmail.com'
}];
// 객체 분해(ES6)
function print({
  no,
  name,
  email
}) {
  console.log(`${no}:${name}:${email}`);
}
//for.. of(ES6)
for (var _i = 0, _users = users; _i < _users.length; _i++) {
  let user = _users[_i];
  print(user);
}

// 템플릿 문자열
