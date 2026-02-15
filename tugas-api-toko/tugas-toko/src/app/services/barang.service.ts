import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Barang {
  id?: number;
  nama_barang: string;
  harga: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarangService {

  private apiUrl = 'http://localhost:3000/api/barang';

  constructor(private http: HttpClient) {}

  // GET
  getBarang(): Observable<Barang[]> {
    return this.http.get<Barang[]>(this.apiUrl);
  }

  // POST
  tambahBarang(data: Barang): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
