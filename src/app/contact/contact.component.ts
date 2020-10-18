import { Component, OnInit } from '@angular/core';
import { CONTACTINFO } from '../mock-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  info = CONTACTINFO;
  constructor() { }

  ngOnInit(): void {
  }

}
