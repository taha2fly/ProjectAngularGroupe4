import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch.model';
//import { LAUNCHES } from '../../mock-api/mock-api-launches';
import { LaunchService } from '../../services/launch.service';


@Component({
	selector: 'app-launches',
	templateUrl: './launches.component.html',
	styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
		
//	launch: Launch = { 
//		flight_number: 65,
//		launch_year: "2018",
//		rocket: { 
//			rocket_name: "Falcon 9"
//		},
//		links: {
//			mission_patch: "https://images2.ingbox.com/c5/53/5JKlZkPz_o.png"
//			},
//		details: "SSL manufactured communications satellite"
//	};
	
//	launches = LAUNCHES;
	launches: Launch[] = [];


	selectedLaunch?: Launch;
	onSelect(launch: Launch): void {
  		this.selectedLaunch = launch;
	}
	
	// With this parameter we simultaneously define a private property
	// And identify this property as injection site
	constructor(private launchService: LaunchService) { }

	getLaunches(): void {
		// Synchronous version that works correctly because we are 
		// using mock-api data
		//this.launches = this.launchService.getLaunches();	
		
		// We have to adapt our code in order to coop with the remote
		// servers and their asynchronous operations
		this.launchService.getLaunches().subscribe(launches => this.launches = launches );
	} 

	ngOnInit(): void {
		this.getLaunches();
	}

}
