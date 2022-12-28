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

function test (a,b) {}
