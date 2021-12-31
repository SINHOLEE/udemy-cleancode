/**
 *
 * var는 함수 스코프,
 * let, const는 블록스코프를 가진다.
 * -> TDZ가 있기 때문에 안전한 코드를 작성할 수 있다.
 * */

var name = '이름';

var name = '이름2'
console.log(name)
// 값은 다른데 변수명이 같다.  이때 에러가 없다.
// 재할당에 제약이 없다.

{
	let name1 = '이름';
	
	let name1 = '이름2'
	console.log(name)
	
}
// let은 재할당 가능, const는 재할당 할 수 없음

// 스코프는 그렇다면 어떻게 다를까?!

