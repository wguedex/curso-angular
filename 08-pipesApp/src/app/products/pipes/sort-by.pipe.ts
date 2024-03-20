import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => a.name.localeCompare(b.name));

      case 'canFly':
        return heroes.sort((a, b) => Number(b.canFly) - Number(a.canFly));

      case 'color':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));

      default:
        return heroes;
    }
  }
}
