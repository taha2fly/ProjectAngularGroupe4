import { Component, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsule.model';
import { CAPSULES } from '../../mock-api/mock-api-capsules';

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

	capsules = CAPSULES;
	
	selectedCapsule?: Capsule;
	onSelect(capsule: Capsule): void {
	this.selectedCapsule = capsule;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
