import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RegistrationClientComponent } from './registration-client/registration-client.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FooterWComponent } from './footer-w/footer-w.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuLComponent } from './menu-l/menu-l.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationClientComponent,
    LoginComponent,
    HomeComponent,
    LandingPageComponent,
    MenuComponent,
    FooterComponent,
    FooterWComponent,
    CategoriesComponent,
    MenuLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
