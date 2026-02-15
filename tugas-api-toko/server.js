// ==============================
// IMPORT MODULE
// ==============================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// ==============================
// CORS SECURITY (WAJIB)
// ==============================
const corsOptions = {
  origin: 'http://localhost:8100',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// ==============================
// DATA DUMMY (Simulasi Database)
// ==============================
let dataBarang = [
  { id: 1, nama_barang: 'Beras 5kg', harga: 65000 }
];

// ==============================
// GET - Ambil Semua Barang
// ==============================
app.get('/api/barang', (req, res) => {
  res.json(dataBarang);
});

// ==============================
// POST - Tambah Barang
// ==============================
app.post('/api/barang', (req, res) => {
  const barangBaru = req.body;

  barangBaru.id = Date.now();
  dataBarang.push(barangBaru);

  console.log('Barang baru ditambahkan:', barangBaru);

  res.status(201).json({
    pesan: 'Berhasil ditambahkan',
    data: barangBaru
  });
});

// ==============================
// JALANKAN SERVER
// ==============================
app.listen(PORT, () => {
  console.log(`Server Toko berjalan di http://localhost:${PORT}`);
});
