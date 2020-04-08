import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  suscripcion: Subscription;

  constructor() {
    this.suscripcion = this.regresarObservable()
      .pipe(retry(2))
      .subscribe(
        numero => console.log('Subs ', numero),
        error => console.error('Error en el sub', error),
        () => console.log('El observador terminó')
      );
  }

  regresarObservable() {
    return new Observable<any>((observer: Subscriber<any>) => {
      let contador = 0;
      // tslint:disable-next-line: no-shadowed-variable
      const interval = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   clearInterval(interval);
        //   observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('Filter', valor, index);

        // if (valor % 2 === 1) {
        //   return true;
        // } else {
        //   return false;
        // }
        return true;
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.suscripcion.unsubscribe();
  }
}
