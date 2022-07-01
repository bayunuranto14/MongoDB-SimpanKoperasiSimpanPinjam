const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

const pinjamanScheme = new mongoose.Schema({
  id_pinjam: Number,
  id_nsb: Number,
  tgl_pinjam: Date,
  nama_nsb: String,
  jml_pinjam: Number,
  bunga: Number,
  angsuran: String,
  tgl_bayar: Date,
  total_bayar: Number,
});

const pinjaman = mongoose.model("pinjaman", pinjamanScheme);
const arya = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Arya Susilo",
  jml_pinjam: 1000000,
  bunga: 10,
  angsuran: "Angsuran ke-10",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 100000,
});

const rian = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Rian Bagus",
  jml_pinjam: 3000000,
  bunga: 10,
  angsuran: "Angsuran ke-10",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 300000,
});

const andi = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Andi Mulya",
  jml_pinjam: 2000000,
  bunga: 10,
  angsuran: "Angsuran ke-1",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 200000,
});

const sarah = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Sarah Sutiawan",
  jml_pinjam: 5000000,
  bunga: 10,
  angsuran: "Angsuran ke-10",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 500000,
});

const slamet = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Slamet Sejati",
  jml_pinjam: 7000000,
  bunga: 10,
  angsuran: "Angsuran ke-10",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 700000,
});

const budi = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Budi Prasetyo",
  jml_pinjam: 8000000,
  bunga: 10,
  angsuran: "Angsuran ke-10",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 800000,
});

const maryani = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Maryani Susanti",
  jml_pinjam: 1000000,
  bunga: 10,
  angsuran: "Angsuran ke-1",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 100000,
});

const roy = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Roy Suryo",
  jml_pinjam: 3000000,
  bunga: 10,
  angsuran: "Angsuran ke-1",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 300000,
});

const ragil = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Ragil Hermansyah",
  jml_pinjam: 5000000,
  bunga: 10,
  angsuran: "Angsuran ke-1",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 500000,
});

const sri = new pinjaman({
  id_pinjam: 00001,
  id_nsb: 001001,
  tgl_pinjam: 12 / 02 / 2022,
  nama_nsb: "Sri Mulyani",
  jml_pinjam: 4000000,
  bunga: 10,
  angsuran: "Angsuran ke-10",
  tgl_bayar: 12 / 03 / 2022,
  total_bayar: 400000,
});

pinjaman.insertMany(
  [arya, rian, andi, sarah, slamet, maryani, budi, roy, ragil, sri],
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Data Berhasil Disimpan!");
      mongoose.connection.close();
    }
  }
);
