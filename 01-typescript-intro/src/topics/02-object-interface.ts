
/*Declarar arreglo de tipo string*/
let skills: Array<String> = ['Bash', 'Counter','Healing']
/**
 * Otra forma
 */
let skills2: string[] = ['Bash', 'Counter','Healing']


interface Character {
    name: string; 
    hp:number;
    skills:string[];
    hometown?: string; //Es opcional mediante ?
}

const strider: Character = {
    name: 'Strider',
    hp:100, 
    skills: ['Bash', 'Counter'], 
    hometown : ''
}

strider.hometown = 'Barceolna'

console.log(strider)

export {}