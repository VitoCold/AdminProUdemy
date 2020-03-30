import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Optional
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtPorcentaje', { static: false }) txtPorcentaje: ElementRef;

  constructor() {
    // console.log(this.leyenda);
    // console.log(this.porcentaje);
  }

  ngOnInit() {
    // console.log(this.leyenda);
    // console.log(this.porcentaje);
  }

  onChange(nuevoValor: number) {
    // const elemHtml: any = document.getElementsByName('porcentaje')[0];

    // console.log(this.txtPorcentaje);

    if (nuevoValor > 100) {
      nuevoValor = 100;
    }

    if (nuevoValor < 0) {
      nuevoValor = 0;
    }

    this.porcentaje = nuevoValor;

    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(nuevoValor);
  }

  cambiarValor(valor: any) {
    this.porcentaje = Number(this.porcentaje);
    this.porcentaje = this.porcentaje + valor;

    if (this.porcentaje < 0) {
      this.porcentaje = 0;
      return;
    }

    if (this.porcentaje > 100) {
      this.porcentaje = 100;
      return;
    }

    this.cambioValor.emit(this.porcentaje);

    this.txtPorcentaje.nativeElement.focus();
  }
}
