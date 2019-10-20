// Exercise 1 - How was your TypeScript Class?

class Car {
    
    private acceleration: number = 0;

    constructor(public name: string) {

    }

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
car.accelerate(10);
 
// Exercise 2 - Two objects, based on each other ...

class BaseObject  {

    constructor(public width: number = 0, public length: number = 0) {
        
    }

};

class Rectangle extends BaseObject {
    
    constructor(public width: number, public height: number) {
        super();
    }

    public calcSize(): number {
        return this.width * this.length;
    }
};

const rec = new Rectangle(5, 2);
const size = rec.calcSize();
console.log(size);

 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(name: string) {
       
        if (name.length > 3) {
            this._firstName = name;
        } else {
            this._firstName = "";
        }
    }
}

const person = new Person();

console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);