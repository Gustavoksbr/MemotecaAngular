import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento={
    id:"1",
    conteudo:"Aprendendo Angular",
    autoria : "dev",
    modelo:"modelo1",

  }
  criarPensamento()
  {
    alert("Novo pensamento criado!");
  }
  cancelarPensamento()
  {
    alert("Pensamento cancelado!");
  }
}
