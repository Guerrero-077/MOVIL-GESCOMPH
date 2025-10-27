import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/shared/table/table.component';
import { IonContent } from "@ionic/angular/standalone";
import { ContractService } from './service/contract.service';
import { ContractCard } from './models/contract.models';
import { TableColumn } from 'src/app/shared/models/TableColumn.models';

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [TableComponent, IonContent],
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent  implements OnInit {

  data: ContractCard[] = [];
  columns: TableColumn<ContractCard>[] = [
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

  constructor(private contractService: ContractService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.contractService.getAll().then(obs$ => {
      obs$.subscribe(data => {
        this.data = data;
      });
      console.log('Datos cargados:', this.data);
    });
  }


  onView(row: ContractCard) {
    console.log('Ver:', row);
  }

  onDownload(row: ContractCard) {
    console.log('Descargar PDF:', row);
  }

}
