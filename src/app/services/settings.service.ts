import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('Guardado en LS');
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargado del LS');
      this.aplicarTema(this.ajustes.tema);
    } else {
      console.log('Cargando valores default');
    }
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
