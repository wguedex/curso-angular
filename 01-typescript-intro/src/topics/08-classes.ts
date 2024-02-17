

export class Person {
    
    // public name?: string;
    // private address?: string;

    // constructor(name?:string, address?:string) {
    //     this.name = name
    //     this.address=address
    // } 

    constructor(
        public name?:string, 
        private address?:string
        ) {}
}

const iroman = new Person('Wilmer', 'Espana')
console.log(iroman)
//esto no deberia imprimir pero se imprime por javascript
console.log(iroman.address)