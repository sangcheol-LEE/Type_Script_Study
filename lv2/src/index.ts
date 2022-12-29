import Person,{ makePerson } from "./person/Person"
import IPerson from "./person/IPerson"
import Chance from "chance";
import * as R from 'ramda';

const chance = new Chance()

let persons:IPerson[] = R.range(0,2).map((n : number) => new Person(chance.name(), chance.age()))

const testMakePerson = ():void => {
   let lee : IPerson = makePerson("lee")
   let ian :IPerson = new Person("ian")
   console.log(lee, ian)
}

testMakePerson()

console.log(persons)

interface Test {
   name : string;
   age : number;
   etc?: boolean;
}

let test: {
	name : string;
	age: number;
	etc?: boolean;
} = {name : "lee", age : 27}

let test2 : Test = {
   name : "ian",
   age : 33,
   etc: true
}


const testFn = (me : {name : string, age:number, etc?:boolean}) => {
	console.log(
		me.etc ?
			`내 정보는 ~! 바로 ${me.name} ${me.age} ${me.etc}` :
			`이번엔 이정도만 보여줄래 ㅎ ${me.name} ${me.age}`
		)
}

testFn(test)
testFn(test2)

