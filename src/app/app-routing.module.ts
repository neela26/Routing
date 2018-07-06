import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OscompComponent } from './oscomp/oscomp.component';
import { ProgcompComponent } from './progcomp/progcomp.component';
import { DbcompComponent } from './dbcomp/dbcomp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'oscomp',component:OscompComponent},
  {path:'progcomp',component:ProgcompComponent},
  {path:'Dbcomp',component:DbcompComponent},
  {path:'app-component',component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
