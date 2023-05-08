import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  // @Output() settingsEvent = new EventEmitter<boolean>();
  // settingsIsOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // showSettings(): void {
  //   this.settingsIsOn = !this.settingsIsOn;
  // }

  // sorting(value: boolean) {
  //   this.settingsEvent.emit(value);
  // }

}
