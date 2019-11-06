import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'authentication' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
