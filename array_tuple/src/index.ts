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
console.log(first, second, third, rest)