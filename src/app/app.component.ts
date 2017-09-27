import { Component } from '@angular/core';
import { SsnService } from 'app/ssn/ssn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ SsnService ]
})
export class AppComponent {
  PageTitle: string = 'ADM MFAS';
}
