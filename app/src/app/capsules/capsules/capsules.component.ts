import { Component, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsule.model';
//import { CAPSULES } from '../../mock-api/mock-api-capsules';
import { CapsuleService } from '../../services/capsule.service';


@Component({
	selector: 'app-capsules',
	templateUrl: './capsules.component.html',
	styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {

//	capsule: Capsule = {
//		capsule_serial: "C112",
//		capsule_id: "dragon1",
//		status: "active",
//		details: null
//	};

//	capsules = CAPSULES;
	capsules: Capsule[] = [];
	
	selectedCapsule?: Capsule;
	onSelect(capsule: Capsule): void {
	this.selectedCapsule = capsule;
	}

	// With this parameter we simultaneously define a private property	
	// And identify this property as injection site
	constructor(private capsuleService: CapsuleService) { }
	
	getCapsules(): void {
		// Synchronous version that works correctly because we are 
		// using mock-api data
		//this.capsules = this.capsuleService.getCapsules();
		
		// We have to adapt our code in order to coop with the remote
		// servers and their asynchronous operations
		this.capsuleService.getCapsules().subscribe(capsules => this.capsules = capsules );
				
	}

	ngOnInit(): void {
		this.getCapsules();
	}

}
