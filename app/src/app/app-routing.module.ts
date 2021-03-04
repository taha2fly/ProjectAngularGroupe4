import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapsulesComponent } from './capsules/capsules/capsules.component';
import { LaunchesComponent } from './launches/launches/launches.component';

const routes: Routes = [
	{ path : 'capsules', component : CapsulesComponent }, 
	{ path : 'launches', component : LaunchesComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
