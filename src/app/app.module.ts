import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Service Imports
import { ClientService } from './services/client.service';

// Component Imports
const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyAeRDsyA4u3yDoHE_tmAFtzxn8uScl3EPY",
  authDomain: "clients-fc9d2.firebaseapp.com",
  databaseURL: "https://clients-fc9d2.firebaseio.com",
  // projectId: "clients-fc9d2",
  storageBucket: "clients-fc9d2.appspot.com",
  messagingSenderId: "533815078381"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    SettingsComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
    // FlashMessagesModule,

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
