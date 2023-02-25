import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'feature', component: FeatureComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'album', component: AlbumComponent },
];

const firebaseConfig = {
  apiKey: 'AIzaSyAqA2Dh2Kw5DrYENfm3WsRj-kScjmGXrK8',
  authDomain: 'music-app-702d8.firebaseapp.com',
  databaseURL: 'https://music-app-702d8-default-rtdb.firebaseio.com',
  projectId: 'music-app-702d8',
  storageBucket: 'music-app-702d8.appspot.com',
  messagingSenderId: '699550787886',
  appId: '1:699550787886:web:f201f5df2ebeca5023f2bf',
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    SignupComponent,
    AlbumComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
