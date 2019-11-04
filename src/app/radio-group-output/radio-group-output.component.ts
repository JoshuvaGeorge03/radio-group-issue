import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group-output',
  templateUrl: './radio-group-output.component.html',
  styleUrls: ['./radio-group-output.component.scss'],
})
export class RadioGroupOutputComponent implements OnInit {
  @Input() productVariants: any;
  @Output() emitEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  emit(value) {
    this.emitEvent.emit(value);
  }
}
