import { Component, OnInit } from '@angular/core';
import { CapsuleMessageService } from '../services/capsule-message.service';

@Component({
  selector: 'app-capsule-messages',
  templateUrl: './capsule-messages.component.html',
  styleUrls: ['./capsule-messages.component.scss']
})


export class CapsuleMessagesComponent implements OnInit {

  constructor(public capsuleMessageService : CapsuleMessageService) { }

  ngOnInit(): void {
  }

}
