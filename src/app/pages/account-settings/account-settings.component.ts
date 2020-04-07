import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document,
    private ajustesService: SettingsService
  ) {}

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this.ajustesService.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores = this.document.getElementsByClassName('selector');

    // tslint:disable-next-line: prefer-for-of
    for (let ref = 0; ref < selectores.length; ref++) {
      const selector = selectores[ref];

      selector.classList.remove('working');

      if (link === selector) {
        selector.classList.add('working');
      }
    }
  }

  colocarCheck() {
    const selectores = this.document.getElementsByClassName('selector');
    const tema = this.ajustesService.ajustes.tema;
    for (const selector of selectores) {
      if (selector.getAttribute('data-theme') === tema) {
        selector.classList.add('working');
        return;
      }
    }
  }
}
