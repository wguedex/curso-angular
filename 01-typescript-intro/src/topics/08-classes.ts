

export class Person {
    
    // public name?: string;
    // private address?: string;

    // constructor(name?:string, address?:string) {
    //     this.name = name
    //     this.address=address
    // } 

    constructor(
        public lastName?:string, 
        public firstName?:string, 
        public address?:string
        ) {}
}

export class Hero  {
    // public person : Person;
    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public person?: Person
        ) {
      
            // this.person = new Person(realName)
    }
}

// export class Hero extends Person {
//     constructor( 
//         public alterEgo: string, 
//         public age: number, 
//         public realName: string
//         ) {
//         super(realName,'New York')

//     }
// }

const person = new Person('Tony' , 'Stark','New York')
const ironman = new Hero('Ironman',45, '', person)
console.log(ironman)
console.log(person)
//esto no deberia imprimir pero se imprime por javascript
// console.log(iroman.address)