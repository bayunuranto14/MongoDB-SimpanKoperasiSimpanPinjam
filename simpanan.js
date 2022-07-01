//Membuat koneksi
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

//Membuat Data
const simpananschema = new mongoose.Schema({
    id_simpan: Number,
    tgl_simpan: Date,
    nama_nsb: String,
});

const simpanan = mongoose.model("simpanan", simpananSchema);
const arya = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 12/05/2022,
    nama_nsb: "Arya Susilo"
});

const riyan = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 24/03/2022,
    nama_nsb: "Riyan Bagus"
});



