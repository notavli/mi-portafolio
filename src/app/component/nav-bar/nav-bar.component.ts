import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
 // Variable para saber si el menú está abierto o cerrado
  isMenuOpen = false;

  // Función que cambia el estado al hacer clic
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
