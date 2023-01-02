
console.log("start")

function add(a:number, b : number):number {
	return a + b
}

add(1,2)


function print(name: string, age:number):void {
	console.log(`제 이름은 ${name}이고 올해 ${age}살 입니다.`)
}

print("이상철",28)

type stringNumFunc = (string, number) => void
let user1: stringNumFunc = function (a:string, b:number): void {
   console.log(a, b)
}
let user2: stringNumFunc = function (c: string, d: number): void{
   console.log(c, d)
}

user1("lee",1)
user2("kim",2)

interface IAgr {
	age?: number
}

function getAge(num : IAgr) {
	return num != undefined && num.age ? num.age : 0
}

console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({age: 32}))


function func(arg1 : string, agr2?: number): void {
	console.log(`${arg1}은 ${agr2}봉지 부터 시작이다.`)
}

func("진라면", 2)
func("신라면")


const add2 = function(a:number,b:number):void {
	console.log(a + b)
}

add2(123,144)

const arrow1 = (a:number,b:number):void => console.log(a + b)
const arrow2 = (a:number,b:number):void => {
	console.log(a + b)
}

arrow1(5,7)
arrow2(19,2)

const init = (callback: () => void): void => {
	console.log("default initial")
	callback()
	console.log("all initail")
}

init(()=> console.log("custom initial"))

const calc = (value: number, cb:(number) => void):void => {
	let add = (a,b) => a + b
	function multiply(a,b){return a * b}

	let result = multiply(add(1,2), value)
	cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))

const added = (a:number): (number) => number => (b:number): number => a + b
const result = added(1)(2)
console.log(result)

console.log("++++++++++++++++++++++++++++")

type NumberToNumFunc = (number: number)=> number

const addEasy = (a:number): NumberToNumFunc => {
	const _add: NumberToNumFunc = (b : number):number => {
		return a + b
	}
	return _add
}

let funcc: NumberToNumFunc = addEasy(1)
let results = funcc(2)
console.log(results)
console.log(addEasy(3)(6))

type Users = {name: string, age?: number}

const makePerson = (name: string, age: number = 10):Users => {
	const person = {name: name, age: age}
	return person
}

console.log(makePerson("Ian"))
console.log(makePerson("Jane", 29))
console.log("++++++++++++++++++++++++++++")

const makeObject = (key: string, value: string) => ({[key]: value})
console.log(makeObject("Firstname", "Ian"))
console.log(makeObject("Lastname", "Lee"))
console.log("++++++++++++++++++++++++++++")

type KeyValueType = {
	[key:string] : string
}

const makeObj = (key : string, value:string):KeyValueType => ({[key] : value})

console.log(makeObj("firstName", "Ian"))
console.log(makeObj("lastName", "LEE"))

class Foo {
	value : number = 1
	method : () => void = function (): void {
		console.log(`value : ${this.value}`)
	}
}
let foo = new Foo
foo.method()

class FooB {
	constructor(public value : number = 1){}
	method() : void {
		console.log(`value: ${this.value}`)
	}
}

let foob = new FooB(2)
foob.method()

class Bar {
	static whoRU():string {
		return "I'm class Bar !"
	}
}

class _Bar {
	static whoRU(): string {
		return "I'm class _Bar"
	}
}

console.log(Bar.whoRU())
console.log(_Bar.whoRU())