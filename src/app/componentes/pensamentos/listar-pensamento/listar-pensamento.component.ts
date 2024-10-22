
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { NgFor, NgIf } from '@angular/common';
import { Pensamento } from '../../../core/model/pensamento';
import { PensamentoService } from '../../../core/service/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent,NgFor,NgIf],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit {
  ListarPensamentos : Pensamento[] = [];
  constructor(private service:PensamentoService)
  {}
  ngOnInit(): void{
    this.service.listar().subscribe((listaPensamentos)=>{
      this.ListarPensamentos = listaPensamentos;
    });
  }
}


