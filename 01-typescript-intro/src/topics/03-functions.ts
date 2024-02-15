

//funcion normal 
function addNumbers(a:number, b:number) {
    return a+b;
}

//funcion flecha
const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

let result = addNumbers(4,5)

const result2:string = addNumbers(1,2).toString()

const result3:string = addNumbersArrow(3,7)

console.log(result)
console.log(result2)
console.log(result3)


function multiply(firstNumber: number, secondNumber?: number, base: number=2){
    return firstNumber * base; 
}

const multiplyResult: number = multiply(5)
console.log(multiplyResult)


interface Character {
    name: string, 
    hp:number, 
    showHp : () => void 
}


// const healCharacter = (character:Character, amount: number) => {
//     character.hp+=amount
// }

const strider: Character = {
    name: 'Strider', 
    hp: 50, 
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

const healCharacter = (character:Character, amount: number) => {
    character.hp+=amount
}

healCharacter(strider, 10)
healCharacter(strider, 50)

export {}