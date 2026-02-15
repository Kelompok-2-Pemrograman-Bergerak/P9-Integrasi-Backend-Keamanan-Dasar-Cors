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

import { BarangService, Barang } from '../services/barang.service';

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

  listBarang: Barang[] = [];
  namaBaru: string = '';
  hargaBaru: number | null = null;

  constructor(private barangService: BarangService) {}

  ngOnInit(): void {
    this.ambilData();
  }

  ambilData(): void {
    this.barangService.getBarang().subscribe({
      next: (res: Barang[]) => {
        this.listBarang = res;
      },
      error: (err: any) => {
        console.error('Error:', err);
      }
    });
  }

  simpanData(): void {
    if (!this.namaBaru || this.hargaBaru === null) {
      alert('Semua field wajib diisi!');
      return;
    }

    const data: Barang = {
      nama_barang: this.namaBaru,
      harga: this.hargaBaru
    };

    this.barangService.tambahBarang(data).subscribe({
      next: () => {
        alert('Barang berhasil ditambahkan!');
        this.namaBaru = '';
        this.hargaBaru = null;
        this.ambilData();
      },
      error: (err: any) => {
        console.error('Gagal:', err);
      }
    });
  }
}
