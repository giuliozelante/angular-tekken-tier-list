import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CharactersResolver } from "./resolvers/characters-resolver.service";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        component: HomeComponent,
        path: "",
        resolve: {
          characters: CharactersResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [CharactersResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
