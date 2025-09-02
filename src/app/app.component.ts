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

  isLoggedIn = true
  techList = ['JQuery', 'Angular', 'React', 'Vue']
  userRole = 'user'
  isLoadded = true

  tasks = [
    {name: 'Estudar Angular', completed: true},
    {name: 'Praticar ngClass', completed: false}
  ]

  taskProgress = [
    {name: 'Estudo de Angular', progress: 100},
    {name: 'Estudo do ngStyle', progress: 90},
    {name: 'Estudo do Operador Ternário', progress: 100}
  ]

}
