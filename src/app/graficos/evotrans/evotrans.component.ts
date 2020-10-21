import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {DatachartsService} from '../../servicios/datacharts.service';


@Component({
  selector: 'app-evotrans',
  templateUrl: './evotrans.component.html',
  styleUrls: ['./evotrans.component.css']
})
export class EvotransComponent {
  // Variables Del Chart
  // lineChartLabels Toma un arreglo de Fechas para las etiquetas
  public lineChartLabels: Label[] = this.DataChar.feChart;
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  constructor(private DataChar: DatachartsService) { }

  // Utiliza datos directamente del Servicio
  public lineChartData: ChartDataSets[] = [{ data: this.DataChar.DataCharts , label: 'mm/día.' }];



}
