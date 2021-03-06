import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {DatachartsService} from '../../servicios/datacharts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


/** Según el tamaño de la pantalla */
cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          chart: { cols: 1, rows: 2 }
        };
      }

      return {
        columns: 4,
        chart: { cols: 4, rows: 4 }
      };
    })
  );


  constructor(private breakpointObserver: BreakpointObserver,
              public svc: DatachartsService) {}

  // tslint:disable-next-line:typedef
ngOnInit() {
  }
}
