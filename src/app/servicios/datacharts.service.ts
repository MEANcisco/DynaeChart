import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DatoPrincEvo} from '../modelos/datos-evo';
import {interval} from 'rxjs';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatachartsService {
public sensor;
public datosChart;
public feChart;
public Chartsum;
public Destruir = false;
Fechainicio;
FechaFin;

  constructor(private http: HttpClient) { }

  set DestruirGraph(val){
    this.Destruir = val;
  }

  set SensorActual(val) {
    console.log('actualizando sensor: ');
    console.log(val);
    this.sensor = val;
  }
  set Fechaini(Fini) {
    console.log('actualizando sensor: ');
    this.Fechainicio = Fini;
  }
  set Fechaf(Fnal){
    this.FechaFin = Fnal;
  }

  get DataCharts(): any {
  return this.datosChart;
  }

  // tslint:disable-next-line:typedef
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
  if ( this.FechaFin && this.Fechainicio){
    // tslint:disable-next-line:max-line-length
    this.http.get('https://api.dynasystem.cl/data/sensor/' + this.sensor.id + '/calculatedIndex/1?from=' + this.Fechainicio + '&to=' + this.FechaFin).subscribe(
      (data: DatoPrincEvo) => {
        if (this.datosChart !== data.indexDetail.map( d => d.magnitude)){
          this.datosChart = data.indexDetail.map( d => d.magnitude);
          this.Chartsum = data;
        }
        if (this.feChart !== data.indexDetail.map( d =>  d.from )){
          this.feChart = data.indexDetail.map( d =>  d.from );
        }
        console.log(this.feChart);
      }
    );
  }

}

}
