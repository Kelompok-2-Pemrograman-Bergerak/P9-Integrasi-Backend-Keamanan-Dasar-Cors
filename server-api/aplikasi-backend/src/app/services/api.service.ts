import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Optional: Buat interface agar lebih rapi & type-safe
export interface Mahasiswa {
  id?: number;
  nama: string;
  jurusan: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Endpoint Backend
  private readonly apiUrl = 'http://localhost:3000/api/mahasiswa';

  constructor(private http: HttpClient) {}

  // ==========================
  // GET - Ambil Data Mahasiswa
  // ==========================
  getMahasiswa(): Observable<Mahasiswa[]> {
    return this.http.get<Mahasiswa[]>(this.apiUrl);
  }

  // ==========================
  // POST - Tambah Mahasiswa
  // ==========================
  tambahMahasiswa(data: Mahasiswa): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
