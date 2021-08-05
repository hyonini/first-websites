'use strict';

// Object-oriented programming 
// class : template 
// object : instance of a class 템플렛을 이용해서 실제로 데이터를 넣어서 만드는 것이 object! 
// JavaScript Classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance 

// 1. Class declaration 
class Person {
    //constructor
    constructor (name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log (ellie.name);
console.log (ellie.age);
ellie.speak();


// 2. Getter and Setters : 조금 더 방어적으로 만들 수 있는! 실수에 대비해서! i.e. 사용자가 나이를 -1로 넣은 경우
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age (value) {
        if (value < 0) {
            throw Error ('age cannot be negative');
        }
        this._age = 'value';
    }
}

const user1 = new User('Steve', 'Job', 1);
console.log(user1.age);


// 3. Fields (public, private)
// too soon! 최근에 나온거라서 아직 제대로 적용 안됨 

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// too soon!

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log (Article.publisher);
Article.printPublisher();


// 상속 & 다양성

// 5. Inheritance 
// a way for one class to extend another class

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}   // 새로 추가하고 싶은 class 입력하고 extends 를 사용
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('wowowowo');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle (20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle (20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf - 왼쪽에 있는 object가 오른쪽에 있는 클래스의 instance인지 아닌지 
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
