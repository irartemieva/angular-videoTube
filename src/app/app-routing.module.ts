import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './youtube/pages/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginFormComponent } from './auth/login-form/login-form.component';


const routes: Routes = [
  { path: '',  redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'videos',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
