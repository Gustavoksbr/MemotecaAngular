import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { Erro404Component } from './componentes/erro404/erro404.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
    {
      path:"criarPensamento",
      component: CriarPensamentoComponent
     },
     {
      path:"excluirPensamento/:id",
      component: ExcluirPensamentoComponent
      },
      {path:"alterarPensamento/:id",
         component: EditarPensamentoComponent
      },
     {
      path:'',
        component: ListarPensamentoComponent
     },
     {
        path:'**',
        component:Erro404Component
     }
];
