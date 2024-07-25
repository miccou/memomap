import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    const map = new maplibregl.Map({
      container: 'map', // container id
      style: 'fiord-color-gl-style.json', // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
      attributionControl: false,
      maplibreLogo: false,
    });
  }
}
