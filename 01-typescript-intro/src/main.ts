import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './topics/01-basic-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola Mundo`
console.log('Hola Mundo')

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
