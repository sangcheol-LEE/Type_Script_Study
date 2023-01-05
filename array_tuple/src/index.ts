import {range} from "./utils/func";

console.log("array start")

let numArray : number[] = [1,2,3,4]
let stringArray : string[] = ["이상철은","좋은_개발자가","될_것이다"]

type IPerson = {name : string, age?:number}
let personArray :IPerson[] = [{name: "이상철"}, {name: "상철", age: 28}]

console.log("numArray : ",numArray, "stringArray : ",stringArray, "personArray : ",personArray);

const split = (str: string, 구분자 : string = ""):string[] => {
	return str.split(구분자)
}
const join = (strArray: string[], 구분자 : string =""):string => {
	return strArray.join(구분자)
}
console.log(split("ian lee", " "))

console.log(join(["ian","lee"]))

const numbers : number[] = [1,2,3,4,5]
for(let i =0; i < numbers.length; i++) {
	const item: number = numbers[i]
	console.log(item)
}

let sampleArray: number[] = [1,2,3,4,5];
let [first, second, third, ...rest] = sampleArray
console.log(first, second, third, rest);


// for in 은 배열의 인덱스값을 순회한다.
let names = ["Jack", "Jane", "Steve"];

for(let index in names) {
	const name = names[index];
	console.log(`for in : [${index}] : ${name}`)
}

// for of 는 배열의 아이템값을 순회합니다.

for(let name of names) {
	console.log("for of : ",name)
}

const fold = <T>(array: T[], callback: (result: T,val: T) => T,initValue :T) => {
	let result:T = initValue
	for(let i = 0; i < array.length; ++i ){
		const value = array[i]
		result = callback(result, value)
	}
	return result
}

let numberss: number[] = range(1, 100 + 1)
let result = fold(numberss, (result, value) => result + value,0)
console.log(result)

// filter method
const sampleArr: number[] = range(1, 10 + 1);
const half:number = sampleArr.length / 2;

let odds: number[] = sampleArr.filter((value) => value % 2 !== 0)
let evens: number[] = sampleArr.filter((value) => value % 2 === 0)

console.log(odds, evens)

let belowHalf:number[] = sampleArr.filter((v, index) => index < half)
let overHalf: number[] = sampleArr.filter((v, index) => index >= half)

console.log(belowHalf, overHalf)

// map method
let squre : number[] = range(1, 5 + 1).map((val:number) => val * val)
console.log(squre)

let namez: string[] = range(1, 5 + 1).map((val:number, index:number) => `[${index}] : ${val}`)
console.log(namez)

// reduce method
let reduceSum: number = range(1, 100 + 1).reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum)

let reduceS : number = range(1, 10 + 1).reduce((result: number, value: number) => result * value, 1)
console.log(reduceS)