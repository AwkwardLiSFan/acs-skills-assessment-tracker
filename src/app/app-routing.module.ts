import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { realmAuthGuardGuard } from "./guards/realm-auth-guard.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [realmAuthGuardGuard],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
