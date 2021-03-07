import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch.model';
import { LaunchService } from '../../services/launch.service';
import { LaunchMessageService } from '../../services/launch-message.service';

@Component({
	selector: 'app-launches',
	templateUrl: './launches.component.html',
	styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
	launches: Launch[] = [];


	selectedLaunch?: Launch;
	
	onSelect(launch: Launch): void {
  		this.selectedLaunch = launch;
  		this.launchMessageService.add(`Selected launch rocket_name=${launch.rocket.rocket_name}`);
	}
	

	constructor(private launchService: LaunchService, private launchMessageService: LaunchMessageService) { }

	getLaunches(): void {
		// Synchronous version that works correctly because we are 
		// using mock-api data
		//this.launches = this.launchService.getLaunches();	
		
		// We have to adapt our code in order to coop with the remote
		// servers and their asynchronous operations, so we are using
		// the subscribe method. 
		this.launchService.getLaunches().subscribe(launches => this.launches = launches );
	} 

	ngOnInit(): void {
		this.getLaunches();
	}

}
