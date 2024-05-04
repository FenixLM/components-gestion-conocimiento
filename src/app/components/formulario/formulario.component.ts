import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/formulario.service';
import { AvisoComponent } from 'src/app/shared/components/aviso/aviso.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  formGroup!: FormGroup;
  selectedFileName: string | undefined;
  etiquetas: string[] = [];
  productId: string | undefined;
  constructor(
    private router: Router,
    private matDialog: MatDialog,
    public formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {
    this.formatForm();
  }

  formatForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      edad: [0, [Validators.required]],
      piensaSiente: ['', [Validators.required]],
      escucha: ['', [Validators.required]],
      ve: ['', [Validators.required]],
      hablaHace: ['', [Validators.required]],
      esfuerzos: ['', [Validators.required]],
      resultados: ['', [Validators.required]],
    });
  }

  guardarData() {
    console.log(this.formGroup.value);

    this.formularioService
      .enviarData(this.formGroup.value)
      .then((data) => {
        console.log(data);
        this.aviso('done', '¡Éxito!', 'Data guardada con éxito');
        console.log('Data enviada');
        console.log(data.id);
        this.matDialog.closeAll();
        this.router.navigate(['/formulario-view', data.id]);
      })
      .catch((error) => {
        console.log('Error al enviar data', error);
      });
  }

  aviso(iconFont: string, titulo?: string, mensaje?: string) {
    return this.matDialog.open(AvisoComponent, {
      id: 'avisoDialog',
      width: '450px',
      height: 'auto',
      panelClass: '',
      data: {
        iconFont,
        titulo,
        mensaje,
      },
    });
  }
}
