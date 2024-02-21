import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaDeExemploComponent } from './components/pagina-de-exemplo/pagina-de-exemplo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import { SidebarCustomizadaComponent } from './components/sidebar-customizada/sidebar-customizada.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarCustomizadaComponent,
    RouterOutlet, 
    PaginaDeExemploComponent, 
    MatToolbarModule,  
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  collapsed = signal(false);

  sideNavWidth = computed(() => this.collapsed() ? '250px' : '250px')


}
