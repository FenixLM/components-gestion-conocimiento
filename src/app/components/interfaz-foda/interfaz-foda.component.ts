import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { TableFodaComponent } from '../table-foda/table-foda.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-interfaz-foda',
  templateUrl: './interfaz-foda.component.html',
  styleUrls: ['./interfaz-foda.component.scss'],
})
export class InterfazFodaComponent {
  pdfSrc =
    'https://saacssigmatest.blob.core.windows.net/report-balance-statement/EECC_6_20240508.pdf?sv=2021-10-04&st=2024-05-09T01%3A40%3A40Z&se=2024-05-09T01%3A45%3A40Z&sr=b&sp=r&sig=aXsLC9OXrkqopf8cmxLUCqbodWIuNPFCGuGmNfugwvI%3D';
  pdfSrcSanitazer;
  @ViewChild(TableFodaComponent) childComponent!: TableFodaComponent;
  title: string = 'Análisis FODA';
  oportunidades: string[] = [];
  fortalezas: string[] = [];
  debilidades: string[] = [];
  amenazas: string[] = [];

  oportunidadesData: string[] = [
    'Computación en la nube: Con el crecimiento continuo del uso de la nube, Microsoft tiene la oportunidad de expandir su presencia en este mercado a través de su plataforma Azure.',
    'Inteligencia Artificial (IA): El desarrollo y la integración de la IA en sus productos y servicios pueden abrir nuevas oportunidades de negocio para la empresas.',
    'Expansión internacional: Microsoft tiene la oportunidad de expandir sus operaciones a nuevos mercados internacionales, especialmente en países en desarrollo donde la adopción de tecnología está en aumento.',
    'Gaming: Con su consola Xbox y su plataforma de juegos, Microsoft puede capitalizar el crecimiento continuo de la industria de los videojuegos.',
  ];

  fortalezasData: string[] = [
    'Marca líder: Microsoft es una de las marcas más reconocidas en el mundo de la tecnología, lo que le otorga una sólida base de clientes y una posición destacada en el mercado.',
    'Diversificación de productos: La empresa ofrece una amplia gama de productos y servicios, incluyendo sistemas operativos (Windows), servicios en la nube (Azure) y hardware (Xbox), lo que le proporciona múltiples fuentes de ingresos.',
    'Innovación tecnológica: Microsoft tiene una sólida trayectoria en innovación, con constantes lanzamientos de nuevas tecnologías y productos que mantienen su relevancia en el mercado.',
    'Ecosistema empresarial: La empresa tiene una gran base de clientes empresariales que dependen de sus soluciones para operar, lo que garantiza un flujo constante de ingresos recurrentes.',
    'Recursos financieros: Microsoft cuenta con una sólida posición financiera que le permite invertir en investigación y desarrollo, así como en adquisiciones estratégicas.',
  ];

  debilidadesData: string[] = [
    'Amplia dependencia a productos de su compañía (sistema operativo, software, productos, etc.).',
    'Adaptación a nuevas tendencias tecnológicas o cambios en las preferencias del mercado.',
    'Éxito vinculado principalmente a los sistemas operativos para PC.',
    'Vulnerable a cambios en la demanda del mercado que afectarían su rentabilidad a largo plazo.',
  ];

  amenazasData: string[] = [
    'Empresas competidoras en el mercado como Apple, Google, Amazon y otras compitiendo.',
    'Riesgo constante de sufrir ciberataques que podrían comprometer la seguridad de sus productos y servicios, lo que afectaría su reputación y la confianza de sus clientes.',
    'Las fluctuaciones en la demanda del mercado pueden afectar los ingresos de la empresa.',
    'Nuevos productos o empresas competidoras que ingresan al mercado con tecnología innovadora.',
    'Cambios en las regulaciones gubernamentales relacionadas con la privacidad de los datos que podrían generar un impacto significativo en las operaciones de la empresa y en su capacidad para innovar y expandirse.',
  ];

  estrategias: any[] = [];

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {
    this.pdfSrcSanitazer = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.pdfSrc
    );
  }

  getEstrategiasOfensivas() {
    this.childComponent.formatearIndices();
    this.title =
      'CUADRANTE DE FORTALEZAS VS OPORTUNIDADES “ESTRATEGIAS OFENSIVAS”.';
    this.oportunidades = this.oportunidadesData;
    this.fortalezas = this.fortalezasData;
    this.debilidades = [];
    this.amenazas = [];
    this.estrategias = [
      {
        codigo: 'E01',
        descripcion:
          'Lanzar servicios de computación en la nube centrados en la IA (F02, O1, O2)',
        fortalezas: [2],
        oportunidades: [1, 2],
      },
      {
        codigo: 'E02',
        descripcion:
          'Expandir el mercado internacional enfocándose en el mundo gaming (F01, O3, O4)',
        fortalezas: [1],
        oportunidades: [3, 4],
      },
      {
        codigo: 'E03',
        descripcion:
          'Implementar soluciones de inteligencia artificial para industrias especificas (F03, F05, O2, O3)',
        fortalezas: [3, 5],
        oportunidades: [2, 3],
      },
    ];
  }

  getEstrategiasDefensivas() {
    this.childComponent.formatearIndices();

    this.title = 'CUADRANTE DE FORTALEZAS VS AMENAZAS “ESTRATÉGIAS DEFENSIVAS”';
    this.amenazas = this.amenazasData;
    this.fortalezas = this.fortalezasData;
    this.debilidades = [];
    this.oportunidades = [];

    this.estrategias = [
      {
        codigo: 'E04',
        descripcion:
          'Reforzar la seguridad cibernética y gestionar riesgos (F03, F05, A02)',
        fortalezas: [3, 5],
        amenazas: [2],
      },
      {
        codigo: 'E05',
        descripcion: 'Diversificar mercados y productos (F02, F05, A03, A04)',
        fortalezas: [2, 5],
        amenazas: [3, 4],
      },
      {
        codigo: 'E06',
        descripcion:
          'Colaborar con reguladores gubernamentales (F04, F05, A05)',
        fortalezas: [4, 5],
        amenazas: [5],
      },
    ];
  }

  getEstrategiasAdaptativas() {
    this.childComponent.formatearIndices();

    this.title =
      'CUADRANTE DE DEBILIDADES VS OPORTUNIDADES “ESTRATÉGIAS ADAPTATIVAS”';
    this.oportunidades = this.oportunidadesData;
    this.debilidades = this.debilidadesData;
    this.fortalezas = [];
    this.amenazas = [];

    this.estrategias = [
      {
        codigo: 'E07',
        descripcion:
          'Diversificar productos y servicios en la nube (D01, D02, O1)',
        debilidades: [1, 2],
        oportunidades: [1],
      },
      {
        codigo: 'E08',
        descripcion:
          'Incorporar IA en productos y servicios existentes (D03, O2)',
        debilidades: [3],
        oportunidades: [2],
      },
    ];
  }

  getEstrategiasSupervivencia() {
    this.childComponent.formatearIndices();

    this.title =
      'CUADRANTE DE DEBILIDADES VS AMENAZAS “ESTRATEGIAS DE SUPERVIVENCIA”';
    this.debilidades = this.debilidadesData;
    this.amenazas = this.amenazasData;
    this.oportunidades = [];
    this.fortalezas = [];

    this.estrategias = [
      {
        codigo: 'E09',
        descripcion:
          'Diversificar alianzas estratégicas para fortalecer la posición competitiva (D01, D02, D03, A01, A04)',
        debilidades: [1, 2, 3],
        amenazas: [1, 4],
      },
      {
        codigo: 'E10',
        descripcion:
          'Invertir en seguridad cibernética y cumplimiento normativo (D04, A02, A05)',
        debilidades: [4],
        amenazas: [2, 5],
      },
    ];
  }
}
