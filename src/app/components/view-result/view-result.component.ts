import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss'],
})
export class ViewResultComponent {
  dataFormulario: any;
  idFormulario: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formularioService: FormularioService
  ) {
    this.activatedRoute.params.subscribe({
      next: (data: any) => {
        console.log(data);

        let id = data.id;
        console.log(id);
        this.idFormulario = id;
        this.obtenerData(id);
      },
    });
  }

  obtenerData(idFormulario: string) {
    this.formularioService
      .getDataFormularioforId(idFormulario)
      .subscribe((data) => {
        console.log(data);
        this.dataFormulario = data;
      });
  }
  regresar() {
    this.router.navigate(['/']);
  }
}
