

export class Person {
    
    // public name?: string;
    // private address?: string;

    // constructor(name?:string, address?:string) {
    //     this.name = name
    //     this.address=address
    // } 

    constructor(
        public name?:string, 
        public address?:string
        ) {}
}

export class Hero extends Person {
    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string
        ) {
        super(realName,'New York')

    }
}

const ironman = new Hero('Ironman',45, 'Tony Stark')
console.log(ironman)
//esto no deberia imprimir pero se imprime por javascript
// console.log(iroman.address)