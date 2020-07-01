// other
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './component/home/home.component';
import { PlaceHolderComponent } from './component/place-holder/place-holder.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'placeholder', component: PlaceHolderComponent, },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
