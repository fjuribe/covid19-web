import { Component, OnInit } from '@angular/core';
import {GoogleCharts} from 'google-charts';
declare var google: any;

@Component({
  selector: 'app-grafico-linea2',
  templateUrl: './grafico-linea2.component.html',
  styleUrls: ['./grafico-linea2.component.css']
})
export class GraficoLinea2Component implements OnInit {

  constructor() { }


  	ngOnInit(): void {
GoogleCharts.load(drawCharts);
 


    function drawCharts() {
      
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      }
  }
}}

