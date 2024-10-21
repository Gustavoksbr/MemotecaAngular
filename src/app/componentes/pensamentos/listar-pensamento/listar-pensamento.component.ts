import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent,NgFor],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  ListarPensamentos = [
    {
      conteudo:'Eu amo Angular',
      autoria:'Gustavo',
      modelo:'modelo3'
    },
    {
      conteudo:'teste2',
      autoria:'Gustavo',
      modelo:'modelo3'
    },
    {
      conteudo:'teste3',
      autoria:'AAAA',
      modelo:'modelo2'
    }
  ];

}


