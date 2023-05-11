import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then(
        (m) => m.TestModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'test',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
