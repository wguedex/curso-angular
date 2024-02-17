
import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
{   description: "Nokia",
    price: 101.0,
},
{
    description: "iPad",
    price: 150.0,
}
];

const tax = 0.19 

const [total, totalTax ] = taxCalculation({
    products: shoppingCart, 
    tax: tax 
})

console.log('Total',total)
console.log('Tax',totalTax)

