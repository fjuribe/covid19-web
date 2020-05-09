import { Component, OnInit } from '@angular/core';
import {GoogleCharts} from 'google-charts';
declare var google: any;

@Component({
  selector: 'app-grafico-linea1',
  templateUrl: './grafico-linea1.component.html',
  styleUrls: ['./grafico-linea1.component.css']
})
export class GraficoLinea1Component implements OnInit {

  ngOnInit(): void {

GoogleCharts.load(drawCharts);

  	function drawCharts() {
  		
  	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'contagiados', 'muertos','recuperados'],
          ['2013',  1000,      400 ,80],
          ['2014',  1170,      460 ,500],
          ['2015',  660,       1120 ,700],
          ['2016',  1030,      540 ,50]
        ]);

        var options = {
          title: 'Acumulativo',
          hAxis: {title: 'Fecha',  titleTextStyle: {color: '#ffffff'},textStyle:{color: '#ffffff'}},
          vAxis: {minValue: 0,textStyle:{color: '#ffffff'}},
          backgroundColor:'#111', //color de fondo
          chartArea:{backgroundColor:'#111'}, //color interno del grafico
          annotations: {textStyle: {color:'red'}},//nose
          
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }
  }
}
}
