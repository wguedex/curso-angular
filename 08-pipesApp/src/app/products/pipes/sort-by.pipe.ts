import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(hero: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case 'name':
        return hero.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;

      case 'canFly':
        return hero.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;

      case 'color':
        return hero.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;

      default:
        return hero;
        break;
    }
  }
}
