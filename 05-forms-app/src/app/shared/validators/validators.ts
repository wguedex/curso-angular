import { FormControl } from "@angular/forms"



export const cantbyStrider = (control:FormControl) =>{

  const value: string = control.value.trim().toLowerCase();

  if (value === 'strider' ){
    debugger;
    return {
      noStrider: false
    }
  }

  return null;
}
