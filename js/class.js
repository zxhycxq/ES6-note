/*class Person {
    constructor(name, gender, age) {
        this.name = name
        this.gender = gender
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let me = new Person('iwillwen', 'man', 19)
console.log(me.isAdult()) //=> true*/


class Animal {
    yell() {
        console.log('yell')
    }
}

class Person extends Animal {
    constructor(name, gender, age) {
        super() // must call `super` before using `this` if this class has a superclass
        this.name = name
        this.gender = gender
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

class Man extends Person {
    constructor(name, age) {
        super(name, 'man', age)
    }
}

let me = new Man('iwillwen', 19)
console.log(me.isAdult()) //=> true
me.yell()
