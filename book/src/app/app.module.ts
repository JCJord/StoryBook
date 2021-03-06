import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { HeaderComponent } from './components/header/header.component';
import { SubjectComponent } from './components/subject/subject.component';
import { InfoComponent } from './pages/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrimaryButtonComponent,
    SwiperComponent,
    HeaderComponent,
    SubjectComponent,
    InfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
