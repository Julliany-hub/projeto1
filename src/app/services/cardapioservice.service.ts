import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardapio } from '../home/pages/cardapio/Cardapio';
@Injectable({
  providedIn: 'root'
})
export class CardapioserviceService {
  private apiUrl = 'http://localhost:3000/cardapio'

  constructor(private http: HttpClient) { }

  getAll(): Observable <Cardapio[]>{
    return this.http.get<Cardapio[]>(this.apiUrl)


  }

}