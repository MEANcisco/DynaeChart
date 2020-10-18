import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DatoPrincEvo} from '../modelos/datos-evo';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatachartsService {
public sensor;
public datosChart;
public feChart;

  constructor(private http: HttpClient) { }

  set SensorActual(val) {
    console.log('actualizando sensor: ');
    console.log(val);
    this.sensor = val;
  }

  get DataCharts(): any {
  return this.datosChart;
  }

  public comenzarTransferencia() {
    interval(3000).subscribe(
      t => this.GetEvotrasensor()
    );
  }
  // tslint:disable-next-line:typedef

// tslint:disable-next-line:typedef
GetEvotrasensor(){
  const ahora = Date.now();
  const hoy = new Date(ahora);
  this.http.get('https://api.dynasystem.cl/data/sensor/' + this.sensor.id + '/calculatedIndex/1?from=' + this.sensor.installationDate + '&to=' + hoy.toISOString()).subscribe(
      (data: DatoPrincEvo) => {
this.datosChart = data.indexDetail.map( d => d.magnitude);
this.feChart = data.indexDetail.map( d => d.from);
console.log(this.feChart);
      }
    );
}

}
