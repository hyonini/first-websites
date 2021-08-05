// Function
// - fundamental building block in the program 
// - subprogram can be used multiple times 여러번 재 사용이 가능하다는 장점이 있음
// - performs a task or calculates a value 한 값이나 어떤 값을 계산하기 위해서 쓰여짐

// 1. Funchtion declaration 
// function name (param1, param2) { body... return;} 
// one function === one thing 하나의 함수는 한 가지의 일 만 하도록 만들어야함 
// naming : doSomething, command, verb 함수는 무언가를 동작하는 것이기 때문에 동사의 형태로 이름을 지정해야함
// e.g. createCardAndPoint -> createCard, createPoint
// fuction is object in JS  fucntion은 Object 임!!! 오브젝트로 간주되어지기 때문에 function을 변수에다가 할당 할 수도 있고, parameter로 전달이 되고 

function printHello () {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
//유용한 함수를 만들려면 parameter로 메세지를 전달하면, 전달된 메세지를 화면에 출력하도록 만드는 것이 좋음
log('Hello@');


//자바스크립트는 타입이 없기 때문에 자바스크립트를 사용했을 때 함수에서 타입이 중요한 경우에는 알기가 힘듬 



// 2. Parameters
// premetive parameters : passed by value - 메모리에 벨류가 그대로 저장되니까 벨류가 전달
// object parameters : passed by reference  - 메모리에 레퍼런스가 저장되니까 레퍼런스가 전달 
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameter (added in ES6) - prameter 옆에 default 값을 지정해 놓으면 사용자가 parameter를 전달하지 않을 때 값이 대체되어서 사용됨
function showMessage(message,from ='unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
showMessage('Hello','bing');

// 4. Rest parameters (added in ES6) ...을 쓰면 rest parameter, 배열 형태로 전달되게 됨
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));

}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage ='global' //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMEssage ='hello';
    }
    // console.long(childMessage); // error
}
printMessage();
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다!!!!

// 6. Return a value
function sum (a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade login...
    }
}

// good - 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종류하고 조건이 맞을 때만 필요한 로직을 실행하는 것이 더 좋음
function upgradeUser(user) {
    if (user.point <=10) {
        return;
    }
    // long upgrade logic...
}



// First-class function
// functions are treated like any other variable 
// can be assigned as a value to variable 
// can be passed as an argument to other functions.
// can be returned by another function 

// 1. function expression
// a function declaration can be called earlier than it is defined (hoisted) - 함수가 선언되기 이전에 호출해도 호출이 가능 
// a function expression is created when the execution reaches it. - g할당 된 다음부터 호출이 가능함

const print = function() { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function () {
    console.log ('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// alwasy anonymous
const simplePrint = function () {
    console.log('simplePrint!'); 
};

const simplePrint =  () => console.log('simplePrint!');
const add = (a, b) => a + b; 
//이거를 function expression으로 바꾸면
const add = function (a, b) {
    return a + b;
}

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIEF');
}) ();


//Fun quiz time
// function calcaulate (coommand, a, b)
// command : add, substract, divide, multiply, remainder