import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {

  public menuItems = routes
    .map((routes) => routes.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    // const dashboardRoutes =
    // routes.map( routes => routes.children ?? [])
    // .flat()
    // .filter( route => route && route.path )
    // .filter( route => !route.path?.includes(':') );
    // console.log(dashboardRoutes)
  }
}
