import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../../core/service/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../../../core/model/pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit{
pensamento: Pensamento={
  id:'',
  conteudo:'',
  autoria:'',
  modelo:''
}
constructor(
  private service:PensamentoService,
  private router:Router,
  private route:ActivatedRoute
){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((pensamento)=>{
      this.pensamento = pensamento;
    });
  }
  excluirPensamento() {
    if(this.pensamento.id) {
        this.service.excluir(this.pensamento.id).subscribe(() => {
            this.router.navigate(['/'])
        })
    }
  }
  cancelarPensamento(){
    this.router.navigate(['/']);
  }

}
