// UPDATE P9 TEST
// ==============================
// IMPORT MODULE
// ==============================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


// ==============================
// KEAMANAN CORS (Whitelist SALAH - Untuk Uji Error)
// ==============================
const corsOptions = {
  // origin: 'http://localhost:8100', // ← Asli (Benar)
  origin: 'http://localhost:8100', // ← Sengaja Salah
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


// ==============================
// SIMULASI DATABASE
// ==============================
let dataMahasiswa = [
  { id: 1, nama: 'Andi Setiawan', jurusan: 'TI' },
  { id: 2, nama: 'Ita Purnamasari', jurusan: 'SI' }
];


// ==============================
// ENDPOINT GET
// ==============================
app.get('/api/mahasiswa', (req, res) => {
  res.json(dataMahasiswa);
});


// ==============================
// ENDPOINT POST
// ==============================
app.post('/api/mahasiswa', (req, res) => {
  const dataBaru = req.body;

  dataBaru.id = Date.now();
  dataMahasiswa.push(dataBaru);

  console.log('Data baru diterima:', dataBaru);

  res.status(201).json({
    pesan: 'Sukses',
    data: dataBaru
  });
});


// ==============================
// JALANKAN SERVER
// ==============================
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
