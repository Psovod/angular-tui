import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'tui-image-editor-menus-buttons-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css'],
    standalone: false
})
export class IconComponent {
  @Input() imageChosen: boolean;
  @Input() selected: boolean = false;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}
