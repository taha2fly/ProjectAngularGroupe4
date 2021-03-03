import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch.model'

@Component({
	selector: 'app-launches',
	templateUrl: './launches.component.html',
	styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
		
	launch: Launch = { 
		flight_number: 65,
		launch_year: "2018",
		rocket: { 
			rocket_name: "Falcon 9"
		},
		links: {
			mission_patch: "https://images2.ingbox.com/c5/53/5JKlZkPz_o.png"
			},
		details: "SSL manufactured communications satellite"
	};
		
	constructor() { }

	ngOnInit(): void {
	}

}
