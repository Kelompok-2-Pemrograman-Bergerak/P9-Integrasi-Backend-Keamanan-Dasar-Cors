import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { ApiService, Mahasiswa } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonCard,
    IonCardContent,
    CommonModule,
    FormsModule
  ],
})
export class HomePage implements OnInit {

  listMahasiswa: Mahasiswa[] = [];
  namaBaru: string = '';
  jurusanBaru: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.ambilData();
  }

  // ==========================
  // Ambil Data dari Server
  // ==========================
    ambilData(): void {
      this.api.getMahasiswa().subscribe({
        next: (res: Mahasiswa[]) => {
          this.listMahasiswa = res;
        },
        error: (err: any) => {
          console.error('Terjadi kesalahan saat mengambil data:', err);
        }
      });
    }

  // ==========================
  // Kirim Data ke Server
  // ==========================
  kirimData(): void {
    if (!this.namaBaru || !this.jurusanBaru) {
      alert('Semua field wajib diisi!');
      return;
    }

    const data: Mahasiswa = {
      nama: this.namaBaru,
      jurusan: this.jurusanBaru
    };

    this.api.tambahMahasiswa(data).subscribe({
      next: (response: any) => {
        alert('Data berhasil dikirim!');
        this.namaBaru = '';
        this.jurusanBaru = '';
        this.ambilData();
      },
      error: (err: any) => {
        console.error('Gagal mengirim data:', err);
        alert('Gagal mengirim data. Cek console.');
      }
    });
  }
}
