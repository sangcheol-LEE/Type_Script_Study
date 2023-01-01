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

let a:string, b: number;

a = "이상철"
b = 27

console.log(`제 이름은 ${a}이고 나이는 ${b}입니다.`)

const address : any = {
   one : "lee",
   two : 27,
   city : "hwa seung",
   num : "2222"
}

const {one , two, ...some} = address

console.log(one, two, some)

let coord =  {...{x : 1},...{y : 2}}

console.log(coord)

// 타입 단언
interface Good {
   name : string
}

let obj: Good = {
   name : "good"
}

let name1 = (<Good>obj).name
let name2 = (obj as Good).name

console.log("1 : ", name1, "2 : ", name2 )