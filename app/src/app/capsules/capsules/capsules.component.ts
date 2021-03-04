import { Component, OnInit } from '@angular/core';
import { Capsule } from '../../models/capsule.model';
import { CapsuleService } from '../../services/capsule.service';
import { CapsuleMessageService } from '../../services/capsule-message.service';

@Component({
	selector: 'app-capsules',
	templateUrl: './capsules.component.html',
	styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {

	capsules: Capsule[] = [];
	
	selectedCapsule?: Capsule;
	
	onSelect(capsule: Capsule): void {
		this.selectedCapsule = capsule;
		this.capsuleMessageService.add(`CapsulesComponent : Selected Capsule id=${capsule.capsule_id}`);
	}


	constructor(private capsuleService: CapsuleService, private capsuleMessageService:CapsuleMessageService) { }
	
	getCapsules(): void {
		this.capsuleService.getCapsules().subscribe(capsules => this.capsules = capsules );				
	}

	ngOnInit(): void {
		this.getCapsules();
	}

}
