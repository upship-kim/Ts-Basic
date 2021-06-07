"use strict";
//변수의 타입 지정 방식
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
