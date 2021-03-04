import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches/launches.component';
import { CapsulesComponent } from './capsules/capsules/capsules.component';
import { CapsuleDetailComponent } from './capsule-detail/capsule-detail.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { CapsuleMessagesComponent } from './capsule-messages/capsule-messages.component';
import { LaunchMessagesComponent } from './launch-messages/launch-messages.component';

@NgModule({
	declarations: [
		AppComponent,
		LaunchesComponent,
		CapsulesComponent,
		CapsuleDetailComponent,
		LaunchDetailComponent,
		CapsuleMessagesComponent,
		LaunchMessagesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
