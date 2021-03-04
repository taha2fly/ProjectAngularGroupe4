import { Injectable } from '@angular/core';
import { Launch } from '../models/launch.model';
import { LAUNCHES } from '../mock-api/mock-api-launches';
import { Observable, of } from 'rxjs';
import { LaunchMessageService } from './launch-message.service';

@Injectable({
	providedIn: 'root'	
})
export class LaunchService {

	constructor(private launchMessageService : LaunchMessageService) { }
	
	getLaunches(): Observable<Launch[]>{
		const launches = of(LAUNCHES);
		this.launchMessageService.add('LaunchService: fetched launches');
		return launches;
	}
	
	
}
