import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-de-exemplo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pagina-de-exemplo.component.html',
  styleUrl: './pagina-de-exemplo.component.css'
})
export class PaginaDeExemploComponent {
  title = 'starWars';

}
