import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosComponent } from './components/dos/dos.component';
import { UnoComponent } from './components/uno/uno.component';

const routes: Routes = [
  {
    path: "login",
    component: UnoComponent,
    pathMatch: "full"
  },
  {
    path: "search",
    component: DosComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
