"use strict";
//(기본)변수의 타입 지정 방식
var count = 0; //숫자
var message = 'hello world'; ///문자열
var done = true; //불리언 값 
var numbers = [1, 2, 3]; //숫자 배열
var messages = ['hello', 'world', 'hehe']; //문자 배열 
//변수에 각 타입 입력에 따른 결과 
messages.push(11111); //에러 // 숫자를 넣으려 하면 타입이 안맞기 때문에 에러가 발생함
messages.push('hahaha'); //가능 //문자는 가능 
messages.push(['hahaha']); //에러 //문자로 구성된 배열도 불가능 
var mightBeUndefined1 = "rrrr"; // 타입이 문자열 이거나 undefined 일때 문자열을 넣겠다 
var mightBeUndefined2 = undefined; // 타입이 문자열 이거나 undefined 일때 undefined를 넣겠다 
var mightBeUndefined3 = 123; // 에러 // 타입이 문자열 이거나 undefined 일때 숫자를 넣으면 에러 
var nullableNumber1 = 1; //타입이 숫자일수도 null일수도 있을 때 숫자 입력 
var nullableNumber2 = null; //타입이 숫자일수도 null일수도 있을 때 null 입력 
var nullableNumber3 = "1"; // 에러 // 타입이 숫자일수도 null일수도 있을 때 문자 입력 
var nullableNumber4 = 1.24231234; // 에러 // 타입이 숫자일수도 null일수도 있을 때 소수점 인 경우에도 가능 
var color1 = 'red'; //타입이 문자열이면서 red인 값 입력
var color2 = 'green'; // 에러 //타입이 문자열이지만 없는 단어를 입력할 시 에러 
var color3 = 3; //타입이 한정된 문자열(red, orange)이거나 숫자 입력
var ConstBlack = 'black';
var color4 = ConstBlack; //타입이 한정된 문자열(red, orange,black )일때 같은 값을 가지고 있는 변수 입력 가능 
var funRed = function () {
    return 'red';
};
var color5 = funRed(); // 에러 // 타입이 한정된 문자열(red, orange,black )일때 같은 값을 반환하는 함수 입력 불가 
///////////////////////
//(기본)함수 타입 지정 방식
function sum(x, y) {
    return x + y;
}
//(x: number, y: number) 는 파라미터인 x 와 y 가 number 값임을 뜻함
//function sum() : number {} 는 함수의 결과 값이 number 임을 뜻함 
sum(1, 2);
sum(); //결과값이 number라는 것을 위에서 명시했기에 null이 반환하게 코드를 작성하면 에러가 뜸 
sum('1', 2); //문자열을 파라미터로 입력하자 에러 
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total1 = sumArray([1, 2, 3, 4, 5]); //파라미터 값을 숫자인 배열로 넣었을때 
var total2 = sumArray(1, 2, 3, 4, 5); //에러 // 파라미터 타입이 숫자인 배열이므로 에러 처리됨 
//만약 함수에서 아무것도 반환하지 않아야 한다면 반환타입을 void로 지정
function retrunNothing() {
    console.log('return Nothing');
}
//변수에 적용하기 
var person = {
    name: '김상배',
    age: 32
};
var person2 = {
    name: '김상배',
    //age 가 없어도 가능 ( 위에서 물음표를 사용하여 처리하였기 때문에)
};
var person3 = {
    age: 32
};
var person4 = {
    name: '김상배',
    age: 32,
    skill: 'react' //에러 // 인터페이스 내 지정하지 않은 타입이 있을 경우 에러 처리 
};
var expert = {
    name: '김상배',
    skills: ["java", "react"]
};
var people = [person, expert]; // Person은 Developer 인터페이스의 부모이기도 함으로 중복된다 
expert.skills.push('oracle');
expert.skills.push(['oracle']); //에러 처리 됨 // 타입이 string으로 이뤄진 배열이기 때문에 
var person5 = {
    name: 'type',
};
var person6 = {
    name: 'type & ',
    skills: ['도저히', '헷갈린다']
};
var newPeople = 
// [{name:'dd'},{name:'sss'}]
[person5, person6];
