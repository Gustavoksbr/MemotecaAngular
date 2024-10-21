import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Pensamento } from '../../../core/model/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent,NgFor,NgIf],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  ListarPensamentos : Pensamento[] = [];

}


