import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from '../../modelos/sensor';
import {DatachartsService} from '../../servicios/datacharts.service';
import {FormControl} from '@angular/forms';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  chart: Sensor;
  serializedDate = new FormControl((new Date()).toISOString());
  serializedDatef = new FormControl((new Date()).toISOString());

  dataestatica: Sensor[] = [
    {id: 12,
      nombre: 'Las Delicias',
      installationDate: '2018-11-10T16:00:00'
    },
    {id: 285,
      nombre: 'Camarico',
      installationDate: '2018-11-10T16:00:00'

    },
    {id: 294,
      nombre: 'Pencahue',
      installationDate: '2018-11-10T16:00:00'
    }
  ];

  constructor( private peticiones: DatachartsService) { }


  ngOnInit(): void {
    this.chart = this.dataestatica[0];
    this.peticiones.SensorActual = this.dataestatica[0];
  }
  // tslint:disable-next-line:typedef
   ActualizarFechas(){
     this.peticiones.Fechaini = this.serializedDate.value.toISOString();
     this.peticiones.Fechaf = this.serializedDatef.value.toISOString();
     console.log('actualiza!');
     this.peticiones.DestruirGraph = false;
     setTimeout(() => {     this.peticiones.DestruirGraph = true;
     }, 2000);
   }

  // tslint:disable-next-line:typedef
  CambiarData(sensor: Sensor){
    this.chart = sensor;
    this.peticiones.SensorActual = sensor;
  }
}
