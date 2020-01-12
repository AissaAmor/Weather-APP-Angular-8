import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MeteoService } from "./service/meteo.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AgmCoreModule } from "@agm/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./Component/weather/weather.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
    // FontAwesomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC1fCUAquywxhrQWLUCQzMH81Zvzf0wDKU",
      libraries: ["places"]
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
