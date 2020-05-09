import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';

// google chart
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GraficoMundialComponent } from './componentes/estadisticas/grafico-mundial/grafico-mundial.component';
import { GraficoLinea1Component } from './componentes/estadisticas/grafico-linea1/grafico-linea1.component';
import { GraficoLinea2Component } from './componentes/estadisticas/grafico-linea2/grafico-linea2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionComponent,
    EstadisticasComponent,
    GraficoMundialComponent,
    GraficoLinea1Component,
    GraficoLinea2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
