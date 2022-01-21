import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SongsComponent } from './components/songs/songs.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},{
  path:'songs',
  component: SongsComponent
},{
   path: '**', redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
