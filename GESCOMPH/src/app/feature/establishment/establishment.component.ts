// import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "src/app/shared/card/card.component";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/angular/standalone";
import { EstablishmentService } from './services/establishment.service';
import { EstablishmentSelect } from './model/establishment.models';
import { TableColumn } from 'src/app/shared/models/TableColumn.models';

@Component({
  selector: 'app-establishment',
  standalone: true,
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss'],
  imports: [CardComponent, IonGrid, IonRow, IonCol, IonContent],
})
export class EstablishmentComponent  implements OnInit {

  establishments: EstablishmentSelect[] = [];
  columns: TableColumn<EstablishmentSelect>[] = [
    { key: 'personFullName', header: 'Nombre' },
    { key: 'personDocument', header: 'Documento' },
    { key: 'personPhone', header: 'Teléfono' },
    { key: 'personEmail', header: 'Email' },
    { key: 'startDate', header: 'Inicio' },
    { key: 'endDate', header: 'Fin' },
    { key: 'totalBase', header: 'Valor Base' },
    { key: 'totalUvt', header: 'UVT' },
    { key: 'active', header: 'Activo' }
  ];

  constructor(private establismentServive :  EstablishmentService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.establismentServive.getAll().then(obs$ => {
      obs$.subscribe(data => {
        this.establishments = data;
      });
    });
  }

  handleDelete(id: string | number) {
    console.log('Eliminar:', id);
    // Implementa tu lógica de eliminación
  }

  onCardUpdated() {
    this.loadData(); // Recarga los datos
  }

  onView(event: any) {
    console.log('Ver:', event);
    // Implementa tu lógica de visualización
  }

  openEditDialogById(id: string | number) {
    console.log('Editar:', id);
  }

}
