import { Component, Signal, signal } from '@angular/core';
import {} from "@angular/material";
import { MatListModule } from '@angular/material/list';
import { MenuItem } from '../../models/menuItem';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-customizada',
  standalone: true,
  imports: [MatListModule, MatIconModule,CommonModule ],
  templateUrl: './sidebar-customizada.component.html',
  styleUrl: './sidebar-customizada.component.css'
})
export class SidebarCustomizadaComponent {

  constructor(
    private router: Router
    ) { }

  menuItens = signal<MenuItem[]>([

    {
      icon: "/assets/casa-50.png",
      label: "Home",
      route: "/home"
    },
    {
      icon: "/assets/film-50.png",
      label: "Filmes",
      route: "/filmes"
    },
    {
      icon: "/assets/nave-naboo-48.png",
      label: "Naves",
      route: "/naves"
    },
  ]);

  navegar(route:string){
    this.router.navigateByUrl(route);
  }

}
