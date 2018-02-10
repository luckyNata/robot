import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import {AppComponent} from "./app.component";

const appRoutes : Routes = [
  { path: '',
    component: AppComponent
  },
  { path: 'one',
    component: OneComponent
  },
  { path: 'two', component: TwoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
