import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileMovieCardComponent } from './components/profile-movie-card/profile-movie-card.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      ShowAllComponent,
      HeaderComponent,
      FooterComponent,
      MovieDetailsComponent,
      MoviesComponent,
      MovieItemComponent,
    MyProfileComponent,
    ProfileCardComponent,
    ProfileMovieCardComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatCardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
