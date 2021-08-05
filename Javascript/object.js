// Objects
// one of the JS's data types
// a collection of related data and/or functionality
// Nearly all objects in JS are instances of Object
// Object = {key : value}; 오브젝트는 키와 벨류의 집합체

// 1. Literals and properties 
const name = 'ellie';
const age = '4';
print (name, age);
function print (name, age) {
    console.log(name);
    console.log(age);
}   //-- 이렇게 하면 주소나 다른 정보를 입력하고 싶을 때 쿼리가 길어짐

const obj1 = {};  //{}브라켓 이용해서 오브젝트 만들거나  'objet literal' syntax
const obj2 = new Object(); //클라스 함수 이용해서 오브젝트 만들기  'object constructor' syntax


function print (person) {
    console.log (person.name);
    console.log (person.age);
}
const ellie = { name: 'ellie', age:4 };
print(ellie);


//JS는 dynamic언어이기 떄문에 (run time 때 코드 실행), 중간에 코드를 삽입하여도 돌아감
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// key should be always string
// 코드를 짜는 시점에서 어떤 벨류가 나올지 모를 때. 예를 들어 사용자에게 정보를 받아서 코드가 나와야하는 경우 사용 가능
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = 'true';
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj [key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person (name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj) 오브젝트 안에 키가 있는지 없는지 확인
console.log('name' in ellie);
console.log('random' in ellie);


// 6. for..in VS for..of
// for  (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}
// for (value of iterable)
const array = {1, 2 , 4, 5};
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age:'20'};
const user2 = user;
console.log(user);

// old way
const user3 ={};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 ={};
Object.assign(user4, user);
console.log(user4); 

// another example
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
