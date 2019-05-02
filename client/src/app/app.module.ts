import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './main_layout/sidebar/sidebar.component';
import { TopbarComponent } from './main_layout/topbar/topbar.component';
import { FooterComponent } from './main_layout/footer/footer.component';
import { LogoutModalComponent } from './main_layout/modals/logout-modal.component';
import { MessagesDropdownComponent } from './main_layout/topbar/messages/messages-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
    MessagesDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
