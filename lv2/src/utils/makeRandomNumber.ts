let MAX_AGE:number = 100;

export const makeRandomNumber = (max : number = MAX_AGE):number => {
   return Math.ceil((Math.random() * max))
}