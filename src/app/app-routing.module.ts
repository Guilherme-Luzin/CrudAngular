import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component'
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
