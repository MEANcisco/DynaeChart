import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {PeticioneshttpService} from '../../servicios/peticioneshttp.service';
import {interval, Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
idsensores = [12 , 285, 294];
datasensores: Observable<any>;
latlong = {lat: -35.443219, lng: -71.587997};

sensorLD;
sensorCA;
sensorPE;
dataestatica = [
  {id: 12,
   nombre: 'Las Delicias',
    geo: this.latlong,
    installationDate: '2018-11-10T16:00:00',
    inicio: '2020-10-01T03:00:00Z',
    fin: '2020-10-05T02:59:59Z'
  },
  {id: 285,
    nombre: 'Camarico',
    geo: this.latlong,
    installationDate: '2018-11-10T16:00:00',
    inicio: '2020-10-01T03:00:00Z',
    fin: '2020-10-05T02:59:59Z'

  },
  {id: 294,
    nombre: 'Pencahue',
    geo: this.latlong,
    installationDate: '2018-11-10T16:00:00',
    inicio: '2020-10-01T03:00:00Z',
    fin: '2020-10-05T02:59:59Z'
  }
];

/** Según el tamaño de la pantalla */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          chart: { cols: 1, rows: 2 },
        };
      }

      return {
        columns: 4,
        chart: { cols: 2, rows: 2 },
      };
    })
  );
  constructor(private breakpointObserver: BreakpointObserver,
              private svcpeticioneshttp: PeticioneshttpService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
   interval(5000 ).subscribe(
     d => {this.cargadata(); }
   );
   console.log(this.datasensores);
  }


  // tslint:disable-next-line:typedef
  cargadata(){
    for (let i = 0; i < 3; i++) {
      this.svcpeticioneshttp.DatosGrafica(this.dataestatica[i].id, this.dataestatica[i].inicio, this.dataestatica[i].fin).subscribe(
        data => {
          console.log(data);
        }
      );
    }  }

}
