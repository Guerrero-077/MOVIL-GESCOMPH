import { inject, Injectable } from "@angular/core";
import { from, Observable, of, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { CapacitorHttp } from "@capacitor/core";
import { EstablishmentSelect } from "../model/establishment.models";

@Injectable({
    providedIn: 'root'
})
export class EstablishmentService {
  private  readonly urlBase = environment.apiURL + '/establishments/';

  private async buildHeaders(): Promise<Record<string, string>> {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  async getAll(): Promise<Observable<EstablishmentSelect[]>> {
    // Simulación de llamada HTTP
    return from(
      CapacitorHttp.get({
        url: this.urlBase,
        headers: await this.buildHeaders()
      })
    ).pipe(
      tap((response) => {
        const data = response.data as EstablishmentSelect[];
      }),
      switchMap((response) => of(response.data as EstablishmentSelect[]))
    );
  }
}