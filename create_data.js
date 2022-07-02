//Membuat koneksi
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

//Membuat Data
var nasabah = require("nasabah");
var pinjaman = require("pinjaman");
var simpanan = require("simpanan");
var pegawai = require("pegawai");

console.log("Data Nasabah berhasil Disimpan", nasabah);
console.log("Data pinjaman berhasil Disimpan", pinjaman);
console.log("Data Simpanan berhasil Disimpan", simpanan);
console.log("Data Pegawai berhasil Disimpan", pegawai);
