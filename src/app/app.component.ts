import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',                //Nome da tag do componente
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html', //HTML associado
  styleUrl: './app.component.css'      //CSS associado
})
export class AppComponent {
  saudacao = 'Olá';
  separador = ',';
  espacamento = ' ';
  title = 'Mundo';            //title é uma variável que está sendo usada no html
  subtitle = 'Interpolation';
  userName = 'João'

  isButtonDisabled = false;

  onButtonClick() {
    alert('Botão clicado')
    console.log("Teste")
    this.isButtonDisabled = !this.isButtonDisabled //true
  }

  isLoggedIn = false
  techList = ['JQuery', 'Angular', 'React', 'Vue']
  userRole = 'admin'

}
