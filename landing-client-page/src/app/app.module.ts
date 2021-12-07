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
import { MenuLComponent } from './menu-l/menu-l.component';
import { RecordComponent } from './record/record.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';

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
    MenuLComponent,
    RecordComponent,
    ShoppingComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
