import { Component, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsule.model'

@Component({
	selector: 'app-capsules',
	templateUrl: './capsules.component.html',
	styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {

	capsule: Capsule = {
		capsule_serial: "C112",
		capsule_id: "dragon1",
		status: "active",
		details: null
	};
	
	constructor() { }

	ngOnInit(): void {
	}

}
