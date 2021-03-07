import { Component, OnInit } from '@angular/core';
import { LaunchMessageService } from '../services/launch-message.service';

@Component({
  selector: 'app-launch-messages',
  templateUrl: './launch-messages.component.html',
  styleUrls: ['./launch-messages.component.scss']
})
export class LaunchMessagesComponent implements OnInit {

  constructor(public launchMessageService : LaunchMessageService) { }

  ngOnInit(): void {
  }

}
