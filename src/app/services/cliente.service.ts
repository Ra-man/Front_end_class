import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/env.dev';
import { Cliente } from 'src/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http: HttpClient = inject(HttpClient);

  get():Observable<Cliente[]>{
      return this.http.get<Cliente[]>(`${environment.URL_API}/clientes`);
  }

  save(cliente: Cliente, id: number = 0): Observable<Cliente>{
    if(id>0){
      return this.http.put<Cliente>(`${environment.URL_API}/clientes/${id}`, cliente);
    }
      return this.http.post<Cliente>(`${environment.URL_API}/clientes`, cliente);
  }

  delete(id:number): Observable<void>{
    return this.http.delete<void>(`${environment.URL_API}/clientes/${id} `)
  }

  find(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${environment.URL_API}/clientes/${id}`);
  }
}