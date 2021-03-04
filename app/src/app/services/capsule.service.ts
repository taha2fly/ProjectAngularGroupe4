import { Injectable } from '@angular/core';
import { Capsule } from '../models/capsule.model';
import { CAPSULES } from '../mock-api/mock-api-capsules';
import { Observable, of } from 'rxjs';
import { CapsuleMessageService } from './capsule-message.service';

@Injectable({
	providedIn: 'root'
})
export class CapsuleService {

	constructor(private capsuleMessageService : CapsuleMessageService) { }

	getCapsules(): Observable<Capsule[]>{
		const capsules = of(CAPSULES);
		this.capsuleMessageService.add('CapsuleService: fetched capsules');
		return capsules;
	}

  
}
