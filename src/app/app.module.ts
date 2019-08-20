import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';


import { AppreciationComponent } from './appreciation/appreciation.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component';
import { DonateusComponent } from './donateus/donateus.component';
import { JoinwithusComponent } from './joinwithus/joinwithus.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({ 
  declarations: [
    AppComponent,
    AppreciationComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    UpcomingeventsComponent,
    DonateusComponent,
    JoinwithusComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path:'', component : HomeComponent },
      { path:'appreciation', component : AppreciationComponent },
      { path:'aboutus', component : AboutusComponent },
      { path:'contactus', component : ContactusComponent },
      { path:'login', component : LoginComponent },
      { path:'upcomingevents', component : UpcomingeventsComponent },
      { path:'donateus', component : DonateusComponent },
      { path:'joinwithus', component : JoinwithusComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
