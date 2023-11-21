import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroClientesComponent } from './pages/cadastro-clientes/cadastro-clientes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'cadastro-clientes',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    component: SobreComponent
  } ,
  {
    path: 'sobre/:nome',
    component: SobreComponent
  },
  {
    path : 'cadastro-clientes',
    component: CadastroClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
