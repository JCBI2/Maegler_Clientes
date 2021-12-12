import { Component, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  coordenadas: any;

  private map : any;

  constructor() { }

  ngOnInit(): void {
  }

  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: '../../../assets/leaflet/marker-icon.png',
      shadowUrl: '../../../assets/leaflet/marker-shadow.png'
   })
};

  private initMap(): void {
    let temp: any;
    this.map = L.map('map', {
      center: [14.064311443955246, -87.1751706646779],
      zoom: 18
    });

    const tiles = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.map.locate({setView: true, maxZoom: 16});

    this.map.on('locationfound', (e: any) => {
      var radius = e.accuracy;
      console.log(e.latlng)
      L.marker(e.latlng, this.icon).addTo(this.map)
    });
  }


  ngAfterViewInit(): void {
    this.initMap()
  }

}
