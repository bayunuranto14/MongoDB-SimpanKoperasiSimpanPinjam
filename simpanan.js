//Membuat koneksi
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

//Membuat Data
const simpananSchema = new mongoose.Schema({
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

const  andi= new simpanan({
    id_simpan: 012345,
    tgl_simpan: 02/08/2022,
    nama_nsb: "Andi Mulya"
});

const sarah = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 26/11/2022,
    nama_nsb: "Sarah Sutiawan"
});


const slamet = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 22/02/2022,
    nama_nsb: "Slamet Sejati"
});

const maryani = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 10/04/2022,
    nama_nsb: "Maryani Susanti"
});

const budi = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 14/09/2022,
    nama_nsb: "Budi Prasetyo"
});

const roy = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 19/07/2022,
    nama_nsb: "Roy Suryo"
});

const ragil = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 19/07/2022,
    nama_nsb: "Ragil Hermansyah"
});

const sri = new simpanan({
    id_simpan: 012345,
    tgl_simpan: 15/12/2022,
    nama_nsb: "Sri Mulyani"
});   

simpanan.insertMany(
    [arya, riyan, andi, sarah, slamet, maryani, budi, roy, ragil, sri],
    function (eror) {
        if (eror) {
            console.log(eror);
        } else {
            console.log("Data Berhasil Disimpan!");
            mongoose.connection.close();
        }
    }
);
