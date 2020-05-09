import { Component, OnInit } from '@angular/core';
import {GoogleCharts} from 'google-charts';
declare var google: any;

@Component({
  selector: 'app-grafico-mundial',
  templateUrl: './grafico-mundial.component.html',
  styleUrls: ['./grafico-mundial.component.css']
})
export class GraficoMundialComponent implements OnInit {

  ngOnInit(): void {
  	//Load the charts library with a callback

 
    /* Geo Chart */
   //Load the 'corecharts'. You do not need to provide that as a type.
GoogleCharts.load(drawCharts);
 
 
function drawCharts() {
  google.charts.load('current', {
        'packages': ['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

   
}

}
}
