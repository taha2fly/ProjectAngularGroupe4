import { Injectable } from '@angular/core';
import { Capsule } from '../models/capsule.model';
import { CAPSULES } from '../mock-api/mock-api-capsules';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CapsuleService {

	constructor() { }

	getCapsules(): Observable<Capsule[]>{
		const capsules = of(CAPSULES);
		return capsules;
	}

  
}
