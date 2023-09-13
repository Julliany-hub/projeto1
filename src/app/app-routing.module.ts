import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/pages/about/about.component';
import { CardapioComponent } from './home/pages/cardapio/cardapio.component';
import { ContatoComponent } from './home/pages/contato/contato.component';
import { BodyComponent } from './shared/components/body/body.component';


const routes: Routes = [
{path:'about', component:AboutComponent},
{path:'contato', component: ContatoComponent},
{path:'body', component: BodyComponent},
{path:'cardapio', component:CardapioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
