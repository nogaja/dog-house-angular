import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { DogDetailsComponent } from './cmps/dog-details/dog-details.component';
import { ItemEditComponent } from './cmps/item-edit/item-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';
import { ItemResolverService } from './services/item-resolver.service';

const routes: Routes = [
  {
    path: 'item/:id', component: DogDetailsComponent,
    resolve: { item: ItemResolverService },
    children: [
     { path: 'edit', component:ItemEditComponent, resolve: {item:ItemResolverService}}
    ]

  },
  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemAppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

