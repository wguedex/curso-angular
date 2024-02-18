// export const whatsMyType = (argument:any) : any =>{
export function whatsMyType<T>(argument: T): T {
  return argument;
}

// const amIString = whatsMyType("Hola Mundo");
// const amINumber = whatsMyType(12345);
// const amIArray = whatsMyType([1, 2, 3, 4, 5]);

const amIString = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType<number>(12345);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
