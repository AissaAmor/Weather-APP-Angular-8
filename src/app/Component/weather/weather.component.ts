import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { MeteoService } from "../../service/meteo.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weather: any;
  click = false;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: MeteoService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.serviceWeather(formValues.location).subscribe(data => {
      this.weather = data;
      console.log(this.weather);
      // this.lat = this.weather.location.lat;
      // this.lng = this.weather.location.lon;
      // this.map.setCenter({ lat: this.lat, lng: this.lng });
      // var marker = new google.maps.Marker({
      //   map: this.map,
      //   position: { lat: this.lat, lng: this.lng }
      // });

      // console.log(this.lat);
      // console.log(this.lng);
      // console.log(this.weather);
    });
  }
  test() {
    if (this.click == false) {
      this.click = true;
      console.log(this.click);
    } else {
      this.click = false;
      console.log(this.click);
    }
  }
}
//   @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
//   map: google.maps.Map;
//   lat = 40.73061;
//   lng = -73.935242;
//   coordinates = new google.maps.LatLng(this.lat, this.lng);
//   mapOptions: google.maps.MapOptions = {
//     center: this.coordinates,
//     zoom: 8
//   };
//   marker = new google.maps.Marker({
//     position: this.coordinates,
//     map: this.map
//   });
//   ngAfterViewInit() {
//     this.mapInitializer();
//   }
//   mapInitializer() {
//     this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
//     this.marker.setMap(this.map);
//   }
// }
