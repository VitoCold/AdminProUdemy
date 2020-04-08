import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'DashBoard', url: '/dashboard' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Rxjs', url: '/rxjs' },
        { titulo: 'Gráficas', url: '/graficas1' }
      ]
    }
  ];
  constructor() {}
}
