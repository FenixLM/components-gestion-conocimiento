import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AvisoComponent } from './shared/components/aviso/aviso.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { ViewPrincipalComponent } from './components/view-principal/view-principal.component';
import { TableFodaComponent } from './components/table-foda/table-foda.component';
import { InterfazFodaComponent } from './components/interfaz-foda/interfaz-foda.component';

@NgModule({
  declarations: [AppComponent, FormularioComponent, AvisoComponent, ViewResultComponent, ViewPrincipalComponent, TableFodaComponent, InterfazFodaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"formulario-prueba-139dd","appId":"1:550068546699:web:d8b66d63eb8d9ecbaff88e","storageBucket":"formulario-prueba-139dd.appspot.com","apiKey":"AIzaSyBMWeqt3Bk8M7Pg7Gfm2qE6PKRlpKdTixU","authDomain":"formulario-prueba-139dd.firebaseapp.com","messagingSenderId":"550068546699"})),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
