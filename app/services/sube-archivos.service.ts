import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubeArchivosService {

  pruebaService: any;

  constructor(private http: HttpClient) { }

  //--------------------------------------------------
  postFile(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let jsonBody =
    {
      "archivo": {
        "fecha": "2019-12-10",
        "usuario": "NMARZORA",
        "nombre": "planilla-res81.xlsx",
        "extension": "xlsx",
        "file64": "UEsDBBQABgAIAAAAIQAhjEY6cwEAAIwFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEVMluwjAQvVfqP0S"
      }
    };
    this.pruebaService = JSON.stringify(jsonBody);
    let url = 'https://appdesa.lasegunda.com.ar/WSTransferenciaArchivosART/resources/view/procesarArchivos';

    return this.http.post(url, this.pruebaService, { headers });
  }
  //--------------------------------------------------

}

