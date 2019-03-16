import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
{
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
    path: 'login',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
