import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeticioneshttpService {

  constructor(private http: HttpClient) { }

// tslint:disable-next-line:typedef
SensoresDash(idsensor: number) {
  return this.http.get('https://api.dynasystem.cl/data/sensor/' + idsensor);
}

// tslint:disable-next-line:typedef
DatosGrafica(idmaquina: number, inicio: string, fin: string){
    return  this.http.get('https://api.dynasystem.cl/data/sensor/' + idmaquina + '/calculatedIndex/1?from=' + inicio + '&to=' + fin);
}

}
