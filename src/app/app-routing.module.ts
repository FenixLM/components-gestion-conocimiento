import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { ViewPrincipalComponent } from './components/view-principal/view-principal.component';
import { InterfazFodaComponent } from './components/interfaz-foda/interfaz-foda.component';

const routes: Routes = [
  { path: '', redirectTo: '/foda', pathMatch: 'full' },
  {
    path: 'foda',
    component: InterfazFodaComponent,
  },

  {
    path: 'formulario',
    component: ViewPrincipalComponent,
  },
  {
    path: 'formulario-view',
    component: ViewResultComponent,
  },

  {
    path: 'formulario-view/:id',
    component: ViewResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
