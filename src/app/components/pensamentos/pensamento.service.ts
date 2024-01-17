import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  // private readonly API:string = "http://localhost:3000/pensamentos"

  private readonly API:string = "/api/pensamento"


  constructor(private httpClient: HttpClient) { }


  listar():Observable<Pensamento[]>{
    return this.httpClient.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento):Observable<Pensamento>{
    return this.httpClient.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: number):Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.httpClient.delete<Pensamento>(url)
  }

  editar(pensamento: Pensamento):Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.httpClient.put<Pensamento>(url, pensamento)
  }

  buscarPorId(id: number):Observable<Pensamento>{
    const url = `${this.API}/${id}`
    console.log(url);

    return this.httpClient.get<Pensamento>(url)
  }





}
