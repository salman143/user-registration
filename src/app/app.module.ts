import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule,  }  from 'angularfire2';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { UserService } from './shared/user.service';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    BsNavbarComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '',            component:AppComponent},
      {path:'list-user',    component:ListUsersComponent},
      {path:'registration', component:SignUpComponent}

    ])
  ],
  providers: [
    UserService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
