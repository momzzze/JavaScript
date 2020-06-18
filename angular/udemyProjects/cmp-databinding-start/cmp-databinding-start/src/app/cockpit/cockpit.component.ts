import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameInp, serverContentInp) {
    this.serverCreated.emit({ serverName: serverNameInp.value, serverContent: this.serverContent.nativeElement.value });
  }

  onAddBlueprint(serverNameInp, serverContentInp) {
    this.blueprintCreated.emit({ serverName: serverNameInp.value, serverContent: this.serverContent.nativeElement.value });
  }


}
