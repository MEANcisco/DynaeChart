import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatoPrincEvo} from '../modelos/datos-evo';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatachartsService {
public sensor;

public datosChart;
public feChart;

public Chartsum: DatoPrincEvo;
public Destruir = false;
Fechainicio;
FechaFin;

  constructor(private http: HttpClient) { }

  // Sets para cambiar variables
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
     this.GetEvotrasensor();
  }
  // tslint:disable-next-line:typedef

// tslint:disable-next-line:typedef
  //Recibe datos del sensor tomando en cuenta las variables cambiadas desde el sitio
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
          this.feChart = data.indexDetail.map( d => {
            const date = new Date(d.from);
            const year = date.getFullYear();
            let month = date.getMonth() + 1;
            let dt = date.getDate();

            if (dt < 10) {
              dt = '0' + dt;
            }
            if (month < 10) {
              month = '0' + month;
            }
            return (year + '-' + month + '-' + dt);
          });
        }
      }
    );
  }

}

}
