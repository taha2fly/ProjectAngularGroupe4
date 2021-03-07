import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../models/launch.model';

@Component({
	selector: 'app-launch-detail',
	templateUrl: './launch-detail.component.html',
	styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {

	@Input() launch: Launch;
	
	constructor() { }

	ngOnInit(): void {
	}

}
