import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "info",
    loadChildren: () =>
      import("./info/info.module").then((m) => m.InfoModule),
  },
  {
    path: "table",
    loadChildren: () =>
      import("./table/table.module").then((m) => m.TableModule),
  },
  { path: "**", redirectTo: "/info" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
