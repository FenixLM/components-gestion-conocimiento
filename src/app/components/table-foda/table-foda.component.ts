import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-foda',
  templateUrl: './table-foda.component.html',
  styleUrls: ['./table-foda.component.scss'],
})
export class TableFodaComponent {
  @Input() title: string = '';
  @Input() oportunidades: string[] = [];
  @Input() fortalezas: string[] = [];
  @Input() debilidades: string[] = [];
  @Input() amenazas: string[] = [];
  @Input() estrategias: string[] = [];
  @Input() titleCuadrante2: string = '';
  @Input() titleCuadrante3: string = '';

  constructor() {}
}
