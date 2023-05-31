import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';

import { MenuComponent } from './pages/client/menu/menu.component';
import { KDashboardComponent } from './pages/staff/kitchen/k-dashboard/k-dashboard.component';
import { DDashboardComponent } from './pages/staff/dinningroom/d-dashboard/d-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuSectionComponent } from './pages/client/sub/menu-section/menu-section.component';
import { ItemDialogComponent } from './pages/client/sub/item-dialog/item-dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MDrawerComponent } from './pages/client/sub/m-drawer/m-drawer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { ConfirmationDialogComponent } from './pages/client/sub/confirmation-dialog/confirmation-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { KOrderCardComponent } from './pages/staff/kitchen/sub/k-order-card/k-order-card.component';
import { KConfirmationDialogComponent } from './pages/staff/kitchen/sub/k-confirmation-dialog/k-confirmation-dialog.component';
import { DConfirmationDialogComponent } from './pages/staff/dinningroom/sub/d-confirmation-dialog/d-confirmation-dialog.component';
import { DOrderCardComponent } from './pages/staff/dinningroom/sub/d-order-card/d-order-card.component';

registerLocaleData(localeEs, 'es-ES', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KDashboardComponent,
    DDashboardComponent,
    HomeComponent,
    MenuSectionComponent,
    ItemDialogComponent,
    MDrawerComponent,
    ConfirmationDialogComponent,
    KOrderCardComponent,
    KConfirmationDialogComponent,
    DConfirmationDialogComponent,
    DOrderCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    MatDialogModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
