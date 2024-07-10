import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  private _url: string = 'https://g1a.com.br/jornal/api_jornal/generos/';

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'f6a95880e88e',
    }),
  };

  constructor(private _httpClient: HttpClient) {}

  getGenero(pk_genero: number) {
    //CONSTRÓI O CAMINHO FINAL = localhost+ parametros
    const endpoint = this._url + '?id=' + pk_genero;
    //RETORNA OS DADOS DA API_BACK
    return this._httpClient.get(endpoint, this._httpOptions);
  }

  getGeneros() {
    //CONSTRÓI O CAMINHO FINAL = localhost+ parametros
    const endpoint = this._url;
    //RETORNA OS DADOS DA API_BACK
    return this._httpClient.get(endpoint, this._httpOptions);
  }

}
