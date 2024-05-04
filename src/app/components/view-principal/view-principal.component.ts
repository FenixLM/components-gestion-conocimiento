import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioService } from 'src/app/services/formulario.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-view-principal',
  templateUrl: './view-principal.component.html',
  styleUrls: ['./view-principal.component.scss'],
})
export class ViewPrincipalComponent implements OnInit {
  formularioSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'proyecto', 'link'];

  constructor(
    private formularioService: FormularioService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getForms();
  }

  getForms() {
    this.formularioService.getFormularios().subscribe((data) => {
      console.log(data);

      this.formularioSource = new MatTableDataSource(data);
      this.formularioSource.paginator = this.paginator;
    });
  }

  openDialogCreate() {
    this.matDialog
      .open(FormularioComponent, {
        id: 'formularioDialog',
        width: '450px',
      })
      .beforeClosed()
      .subscribe(() => {
        this.getForms();
      });
  }
}
