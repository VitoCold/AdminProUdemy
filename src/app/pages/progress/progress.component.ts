import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje1: number = 15;
  porcentaje2: number = 25;
  constructor() {}

  ngOnInit() {}

}
