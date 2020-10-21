import {Component, OnInit} from '@angular/core';
import {Sensor} from '../../modelos/sensor';
import {DatachartsService} from '../../servicios/datacharts.service';
import {FormControl} from '@angular/forms';


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

  constructor( public peticiones: DatachartsService) { }

  // Entrega datos del primer elemento del arreglo de Datos.

  ngOnInit(): void {
    this.chart = this.dataestatica[0];
    this.peticiones.SensorActual = this.dataestatica[0];
  }

  // Función que actualiza datos en el servicio haciendo petición según las fechas
  // tslint:disable-next-line:typedef
   ActualizarFechas(){
     this.peticiones.Fechaini = this.serializedDate.value.toISOString();
     this.peticiones.Fechaf = this.serializedDatef.value.toISOString();
     console.log('actualiza!');
     this.peticiones.DestruirGraph = false;
     this.peticiones.comenzarTransferencia();
     setTimeout(() => {     this.peticiones.DestruirGraph = true;
     }, 2000);
   }

  // Inyecta los datos del Arraglo de sensores al servicio como al elemento actual
  // tslint:disable-next-line:typedef
  CambiarData(sensor: Sensor){
    this.chart = sensor;
    this.peticiones.SensorActual = sensor;
  }
}
