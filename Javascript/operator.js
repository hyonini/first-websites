// 1. string concatenation 
console.log('my' + 'cat');
console.log('1' +'2');
console.log(`string literals:
'''''
 1 + 2 = ${1 + 2}`);  //중간에 이렇게 ''''를 넣어도 그대로 출력 됨 

console.log("ellie's \n book");   // \n 줄 바꿈
console.log("ellie's \t book")  // \t 탭 키


// 2. Numeric operators
console.log (1 + 1); // add
console.log (1 - 1); // substract 
console.log (1 / 1); // divide
console.log (1 * 1); // multiply
console.log (5 % 2); //remainder 나누고 나머지 값
console.log (2 ** 3); // exponentiation 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 이 ++ 사인 붙은 걸 preIncrement라고 함
// counter = counter + 1;
// preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;



// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x 

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check() }`); //value 세 개 중에서 하나라도 true가 되면 true로 계산 됨 
//만약 처음의 value가 true로 나오면 그 이후의 value는 계산하지 않음 

// && (and), finds the first falsy value 
console.log(`and: ${value1 && value2 && check() }`);
// 세 개가 다 true 가 나와야 true를 리턴, 만약 첫 value가 false면 무조건 false를 보여줌

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) { nullableObject.something; }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('whatt');
    }
    return true;
}

// ! (not) 값을 반대로 바꿔줌
console.log (!value1);


// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 
// 타입을 변경해서 검사 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입이 다르면 다르다고 인식하게 됨
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference 
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operator;  if 
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log ('welcome, Ellie!');
} else if (name === 'coder') {
    console.log ('You are amazing coder');
} else {
    console.log('unknown');
} 

// 9. Ternary operator: ? 
// condition ? value1 : value2; 
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browswer = 'IE';
switch (browswer) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log;('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop,  while the condition is truthy, 
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for (begin; conditionl step)
for (i = 3; i > 0; i--) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0 < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//QUIZZZZZZZZZZ 
// break, continue 

// Q1. iterate from 0 to 10 and print only even numbers (use continue)

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)