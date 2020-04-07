import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { AppRoutingModule } from './app-routing.module';

// App
import { AppComponent } from './app.component';

// Principal components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

// Services

import {
  SettingsService,
  SidebarService,
  SharedService
} from './services/service.index';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, FormsModule],
  providers: [SettingsService, SidebarService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
