import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { Erro404Component } from './componentes/erro404/erro404.component';

export const routes: Routes = [
    {path:"criarPensamento",
        component: CriarPensamentoComponent
     },
     {path:'',
        component: ListarPensamentoComponent
     },
     {
        path:'**',
        component:Erro404Component
     }
];
