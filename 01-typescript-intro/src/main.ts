import './style.css'

import { setupCounter } from './counter.ts'
import './topics/01-basic-types.ts'
import './topics/02-object-interface.ts'
import './topics/03-functions.ts'
import './topics/04-homework-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola Mundo`
console.log('Hola Mundo')

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
