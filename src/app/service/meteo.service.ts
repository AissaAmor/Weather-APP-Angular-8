import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MeteoService {
  constructor(private http: HttpClient) {}
  serviceWeather(location) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=cc4519c7aea20e5b4840a88d2371e408&query=" +
        location
    );
  }
}
