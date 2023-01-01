interface Person {
	name_1: string
	age_1?: number
}

let user1 : Person = {name_1: "ian", age_1: 28},
			user2 : Person = {name_1:"roo", age_1:30}

let {name_1, age_1} = user1
console.log(name_1,age_1)
// let {name_2, age_2} = user2

let address :any = {
	country: "KOREA",
	city : "Suwon",
	address1 : "Hwa..",
	address2 : "wa..",
	address3 : "a.."
}

const {country,city, ...detail} = address
console.log(country,city)
console.log(detail)

let coord = {...{x: 0}, ...{y: 0}}
console.log(coord)

interface IName {
	name : string
}

let Obj: object ={ name : "Ian" }
let name1 = (<IName>Obj).name
let name2 =(Obj as IName).name

console.log(name1, name2)