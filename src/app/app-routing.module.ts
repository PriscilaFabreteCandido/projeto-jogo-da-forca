import { AppHomeComponent } from './components/app-home/app.home.component';
import { AppJogoForcaComponent } from './components/jogo-forca/app.jogo-forca.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'jogar', component: AppJogoForcaComponent },
  { path: 'home', component: AppHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
