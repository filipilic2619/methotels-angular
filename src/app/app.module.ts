import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PosterComponent } from './poster/poster.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { RoomsmainComponent } from './roomsmain/roomsmain.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobe', component: RoomsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PosterComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FooterComponent,
    RoomsComponent,
    HeaderComponent,
    RoomsmainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
