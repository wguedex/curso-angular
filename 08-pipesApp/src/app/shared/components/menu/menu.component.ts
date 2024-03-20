import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menuItem: MenuItem[] = [];

  ngOnInit() {
    this.menuItem = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comúnes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items:[{
          label: 'Custom Pipes',
          icon: 'pi pi-cog',
          routerLink: 'custom'
        }]
      }
    ];
  }
}
