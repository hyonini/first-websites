'use strict'

// Array 

// 1. Declaration ( 배열을 선언하는 방법)
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits =['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //배열의 제일 마지막에 있는 아이템을 찾을 때는 배열 length -1을 이용해서 마지막 데이터를 접근할 수 있음

console.clear();
// 3. Lopping over an array 
// print all fruits
// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach - callback함수를 받아옴, 배열안에 들어있는 벨류들마다 내가 전달한 함수를 출력
fruits.forEach((fruit,index) =>  console.log(fruit, index));


// 4. Addition, deletion, copy
// push : add an iten to the end 
fruits.push('pear','peach');
console.log(fruits);

// pop : remove an item from the end 
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning 
fruits.unshift ('watermelon','grape');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift ();
console.log(fruits);

// note!! ** shift, unshift are slower than pop,push

// splice : remove an item by index position
fruits.push('strawberry','lemon','lime');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1, 'fig','date');  //지운 곳에 원하는 데이터를 넣음 
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. searching 
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('fig'));
console.log(fruits.indexOf('lime'));
console.log(fruits.indexOf('coconut'));  //배열 안에 해당하는 값이 없을 때는 -1으로 표시 됨
// includes
console.log(fruits.includes('lime')); // includes 는 해당 인덱스가 값에 있는지 없는지 true or false로 보여줌
console.log(fruits.includes('coconut'));
// lastIndexOf
console.clear();
fruits.push('grape');
console.log(fruits);
console.log(fruits.indexOf('grape'));
console.log(fruits.lastIndexOf('grape'));