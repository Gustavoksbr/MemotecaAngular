import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../core/model/pensamento';
import { PensamentoService } from '../../../core/service/pensamento.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit{


  pensamento:Pensamento ={
    modelo:'',
    autoria:'',
    conteudo:''
  };
  constructor(private service:PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((pensamento)=>{
      this.pensamento = pensamento;
    })
  }

editarPensamento(){
this.service.editar(this.pensamento).subscribe(()=>{
  this.router.navigate(['/']);
})
}
cancelar(){
  this.router.navigate(['/']); 
}
}
