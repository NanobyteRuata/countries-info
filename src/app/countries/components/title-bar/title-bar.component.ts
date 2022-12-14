import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent {
  @Input('title') title!: string;
  @Input('searchValue') searchValue!: string;
  @Output('searchValueChange') searchValueChange: EventEmitter<string> =
    new EventEmitter();

  constructor(public elementRef: ElementRef) {}

  onSearchValueChange = (value: string) => {
    this.searchValueChange.emit(value);
  };
}
