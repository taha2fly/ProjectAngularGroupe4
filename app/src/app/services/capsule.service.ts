import { Injectable } from '@angular/core';
import { Capsule } from '../models/capsule.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CapsuleMessageService } from './capsule-message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CapsuleService {

	private capsulesUrl = 'https://api.spacexdata.com/v3/capsules';	
	
	constructor(
		private http: HttpClient,
		private capsuleMessageService : CapsuleMessageService) {}

	getCapsules(): Observable<Capsule[]>{
		return this.http
				.get<Capsule[]>(this.capsulesUrl)
				.pipe(
				tap(_ => this.log('fetched capsules')),
				catchError(this.handleError<Capsule[]>('getCapsules', [] ))
				);
	}
	
	/** Log a CapsuleService message with the CapsuleMessageService */
	private log(message: string) {
		this.capsuleMessageService.add(`CapsuleService: ${message}`);
	}


	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead

		// TODO: better job of transforming error for user consumption
		this.log(`${operation} failed: ${error.message}`);

		// Let the app keep running by returning an empty result.
		return of(result as T);
		};
	}
  
}
