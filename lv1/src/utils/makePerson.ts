interface Para {
   name: string,
   age : number
}

export const makePerson = (name : string, age: number):Para => {
   return {
      name : name,
      age: age
   }
}

export const testMakePerson = () => {
   console.log(
      makePerson("상철",27),
      makePerson("이안",33)
   )
}