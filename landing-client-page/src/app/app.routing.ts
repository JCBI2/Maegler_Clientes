import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationClientComponent } from './registration-client/registration-client.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecordComponent } from './record/record.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationClientComponent},
    { path: 'home/record', component: RecordComponent},
    { path: 'home/shopping', component: ShoppingComponent},
    { path: '', component: LandingPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}