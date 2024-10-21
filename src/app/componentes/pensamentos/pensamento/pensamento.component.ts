import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../../core/model/pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento= {
    id:0,
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
