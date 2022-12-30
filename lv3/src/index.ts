class Person {
   name: string
   age? : number
}


let ian : Person = new Person()

ian.name = "ian"; ian.age = 12

console.log(ian)


class Person2 {
   constructor(public name : string, public age: number) {}
}

let user :Person2 = new Person2("상철", 29)

console.log(user)

class Person3 {
   name : string
   age ?: number

   constructor(name : string ,age ?: number) {
      this.name = name;
      this.age = age;
   }
}

let user3 :Person3 = new Person3("Jack", 32)
console.log(user3)