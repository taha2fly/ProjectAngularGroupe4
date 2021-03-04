import { Injectable } from '@angular/core';
import { Launch } from '../models/launch.model';
import { LAUNCHES } from '../mock-api/mock-api-launches';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'	
})
export class LaunchService {

	constructor() { }
	
	getLaunches(): Observable<Launch[]>{
		const launches = of(LAUNCHES);
		return launches;
	}
	
	
}
