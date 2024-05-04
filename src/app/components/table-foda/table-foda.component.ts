import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-foda',
  templateUrl: './table-foda.component.html',
  styleUrls: ['./table-foda.component.scss'],
})
export class TableFodaComponent implements OnInit {
  @Input() title: string = '';
  @Input() oportunidades: string[] = [];
  @Input() fortalezas: string[] = [];
  @Input() debilidades: string[] = [];
  @Input() amenazas: string[] = [];
  @Input() estrategias: any[] = [];
  @Input() titleCuadrante2: string = '';
  @Input() titleCuadrante3: string = '';

  resaltarIndicesFortalezas: number[] = [];
  resaltarIndicesOportunidades: number[] = [];
  resaltarIndicesDebilidades: number[] = [];
  resaltarIndicesAmenazas: number[] = [];

  estrategiaSeleccionada: any | null = null;

  constructor() {}
  ngOnInit() {
    this.formatearIndices();
  }

  formatearIndices() {
    console.log('formatearIndices');

    this.resaltarIndicesFortalezas = [];
    this.resaltarIndicesOportunidades = [];
    this.resaltarIndicesDebilidades = [];
    this.resaltarIndicesAmenazas = [];
  }

  pintaEstrategia(estrategia: any) {
    this.estrategiaSeleccionada = estrategia;

    estrategia.fortalezas &&
      (this.resaltarIndicesFortalezas = estrategia.fortalezas);
    estrategia.oportunidades &&
      (this.resaltarIndicesOportunidades = estrategia.oportunidades);

    estrategia.debilidades &&
      (this.resaltarIndicesDebilidades = estrategia.debilidades);

    estrategia.amenazas && (this.resaltarIndicesAmenazas = estrategia.amenazas);
  }
}
