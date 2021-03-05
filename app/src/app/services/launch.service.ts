import { Injectable } from '@angular/core';
import { Launch } from '../models/launch.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LaunchMessageService } from './launch-message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'	
})
export class LaunchService {

	private launchesUrl = 'https://api.spacexdata.com/v3/launches';	
	
	constructor(
		private http: HttpClient,
		private launchMessageService : LaunchMessageService) {}
	
	getLaunches(): Observable<Launch[]>{
		return this.http
			.get<Launch[]>(this.launchesUrl)
			.pipe(
				tap(_ => this.log('fetched launches')),
				catchError(this.handleError<Launch[]>('getLaunches', []))
				);
	}
	
	/** Log a LaunchService message with the LaunchMessageService */
	private log(message: string) {
		this.launchMessageService.add(`LaunchService: ${message}`);
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
