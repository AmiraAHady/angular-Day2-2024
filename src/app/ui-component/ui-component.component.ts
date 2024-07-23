import { Component } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-component',
  standalone: true,
  imports: [MatButtonModule,NgbAlertModule],
  templateUrl: './ui-component.component.html',
  styleUrl: './ui-component.component.css'
})
export class UiComponentComponent {

}
