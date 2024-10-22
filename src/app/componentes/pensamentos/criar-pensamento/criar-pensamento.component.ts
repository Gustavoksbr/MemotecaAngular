import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Pensamento } from '../../../core/model/pensamento';
import { PensamentoService } from '../../../core/service/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent  {
  pensamento : Pensamento={
    conteudo:"Aprendendo Angular",
    autoria : "dev",
    modelo:"modelo1",

  }
  constructor(private service:PensamentoService,private router:Router){}
  criarPensamento()
  {
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/'])
      });
  }
}
