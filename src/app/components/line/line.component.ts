import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  private _x1: number = 0;
  private _y1: number = 0;
  private _x2: number = 0;
  private _y2: number = 0;

  @Input()
  set x1(cord: number) {
    this._x1 = cord + 125;
  }
  get x1() {
    return this._x1;
  }

  @Input()
  set y1(cord: number) {
    this._y1 = cord + 100;
  }
  get y1() {
    return this._y1;
  }

  @Input()
  set x2(cord: number) {
    this._x2 = cord + 125;
  }
  get x2() {
    return this._x2;
  }

  @Input()
  set y2(cord: number) {
    this._y2 = cord + 100;
  }
  get y2() {
    return this._y2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
