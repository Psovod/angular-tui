import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'tui-image-editor-menus-buttons-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css'],
    standalone: false
})
export class TextComponent {
  @Input() imageChosen: boolean;
  @Input() selected: boolean = false;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}
