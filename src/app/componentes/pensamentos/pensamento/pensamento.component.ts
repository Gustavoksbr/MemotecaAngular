import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../../core/model/pensamento';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento= {
    id:'',
    conteudo:'',
    autoria:'',
    modelo:''
  }
  larguraPensamento():string{
    if(this.pensamento.conteudo.length >= 256)
    {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
