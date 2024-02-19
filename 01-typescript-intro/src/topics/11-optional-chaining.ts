



export interface Passenger {
    name : string;
    children?: string[];
}

const passenger1: Passenger = {
    name:'Fernando'
}

const passenger2: Passenger = {
    name:'Melissa', 
    children:['Natalia','Elizabeth']
}

const printChildren = (passenger:Passenger): number => {
    // const howManyChildren = passenger.children!.length || 0
    const howManyChildren = passenger.children?.length || 0
    console.log(howManyChildren)
    return howManyChildren
}

printChildren(passenger2)