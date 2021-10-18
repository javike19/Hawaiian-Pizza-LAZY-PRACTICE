import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `gallery`, loadChildren: () =>
      import('./@pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: `contact`, loadChildren: () =>
      import('./@pages/contact/contact.module').then(m => m.ContactModule)
  },
  { path: ``, redirectTo: ``, pathMatch: `full`}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
