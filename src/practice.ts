//(기본)변수의 타입 지정 방식
let count = 0; //숫자

const message:string = 'hello world';  ///문자열

const done:boolean = true; //불리언 값 

const numbers:number[] = [1,2,3]; //숫자 배열

const messages:string[] = ['hello', 'world', 'hehe']; //문자 배열 

//변수에 각 타입 입력에 따른 결과 
messages.push(11111); //에러 // 숫자를 넣으려 하면 타입이 안맞기 때문에 에러가 발생함
messages.push('hahaha'); //가능 //문자는 가능 
messages.push(['hahaha']); //에러 //문자로 구성된 배열도 불가능 

let mightBeUndefined1:string | undefined = "rrrr";  // 타입이 문자열 이거나 undefined 일때 문자열을 넣겠다 
let mightBeUndefined2:string | undefined = undefined; // 타입이 문자열 이거나 undefined 일때 undefined를 넣겠다 
let mightBeUndefined3:string | undefined = 123; // 에러 // 타입이 문자열 이거나 undefined 일때 숫자를 넣으면 에러 

let nullableNumber1:number | null = 1; //타입이 숫자일수도 null일수도 있을 때 숫자 입력 
let nullableNumber2:number | null = null; //타입이 숫자일수도 null일수도 있을 때 null 입력 
let nullableNumber3:number | null = "1"; // 에러 // 타입이 숫자일수도 null일수도 있을 때 문자 입력 
let nullableNumber4:number | null = 1.24231234; // 에러 // 타입이 숫자일수도 null일수도 있을 때 소수점 인 경우에도 가능 

let color1: 'red' | 'orange' | 'black' = 'red';  //타입이 문자열이면서 red인 값 입력
let color2: 'red' | 'orange' | 'black' = 'green';  // 에러 //타입이 문자열이지만 없는 단어를 입력할 시 에러 
let color3: 'red' | 'orange' | number = 3;  //타입이 한정된 문자열(red, orange)이거나 숫자 입력
const ConstBlack = 'black'; 
let color4: 'red' | 'orange' | 'black' = ConstBlack;  //타입이 한정된 문자열(red, orange,black )일때 같은 값을 가지고 있는 변수 입력 가능 

const funRed = () =>{
    return 'red';
}
let color5: 'red' | 'orange' | 'black' = funRed();  // 에러 // 타입이 한정된 문자열(red, orange,black )일때 같은 값을 반환하는 함수 입력 불가 




///////////////////////

//(기본)함수 타입 지정 방식

function sum(x: number, y: number) : number{
    return x + y; 
}

//(x: number, y: number) 는 파라미터인 x 와 y 가 number 값임을 뜻함
//function sum() : number {} 는 함수의 결과 값이 number 임을 뜻함 

sum(1,2); 
sum(); //결과값이 number라는 것을 위에서 명시했기에 null이 반환하게 코드를 작성하면 에러가 뜸 
sum('1',2); //문자열을 파라미터로 입력하자 에러 


function sumArray (numbers: number[]) : number{
    return numbers.reduce((acc, current) => acc + current, 0);
} 

const total1 = sumArray([1,2,3,4,5]); //파라미터 값을 숫자인 배열로 넣었을때 
const total2 = sumArray(1,2,3,4,5);     //에러 // 파라미터 타입이 숫자인 배열이므로 에러 처리됨 


//만약 함수에서 아무것도 반환하지 않아야 한다면 반환타입을 void로 지정
function retrunNothing (): void {
    console.log('return Nothing')
}


//일반 객체를 interface로 타입 설정해보기 

interface Person {
    name: string,
    age?: number;   //물음표는 해당 변수를 설정해도 되고 안해도 되고 라는 뜻
}

interface Developer extends Person {
    skills : string[]; 
}

//변수에 적용하기 
const person : Person = {
    name: '김상배',
    age: 32
}

const person2 : Person = {
    name: '김상배',
    //age 가 없어도 가능 ( 위에서 물음표를 사용하여 처리하였기 때문에)
}
const person3 : Person = {    // 에러 // name이 없을 경우에 에러 발생
    age:32
}
const person4 : Person = {
    name:'김상배',
    age:32,
    skill:'react'   //에러 // 인터페이스 내 지정하지 않은 타입이 있을 경우 에러 처리 
}

const expert : Developer = {
    name:'김상배',
    skills:["java", "react"]
}

const people: Person[] = [person, expert];  // Person은 Developer 인터페이스의 부모이기도 함으로 중복된다 






expert.skills.push('oracle'); 
expert.skills.push(['oracle']);     //에러 처리 됨 // 타입이 string으로 이뤄진 배열이기 때문에 



//Type Alias 사용하기 
//: type은 특정 타입에 별칭을 붙이는 용도로 사용한다. 이를 사용하여 객체를 위한 타입을 설정할 수도 있고
// 배열 또는 그 어떤 타입이든 별칭을 지어줄 수 있다. (즉, 타입을 직접 커스텀하여 사용)

type PersonType ={  //PersonAlias 라는 type을 정해줌 
    name : string,
    age?: number; 
}

type DeveloperType = PersonType & {
    skills: string[]
}

const person5: PersonType = {
    name:'type',
}

const person6 : DeveloperType = {
    name:'type & ',
    skills:['도저히','헷갈린다']
}

//기존 타입을 이용하여 새로운 타입 만들기 
type newType = PersonType[]; 
const newPeople: newType = 
    // [{name:'dd'},{name:'sss'}]
    [person5, person6]; 
