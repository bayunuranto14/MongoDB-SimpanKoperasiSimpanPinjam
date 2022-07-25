//Membuat koneksi
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

const pegawaiSchema = new mongoose.Schema({
    id_nasabah: Number,
    nama_nsb: String,
    gender_nsb: String,
    alamat: String,
    kota: String,
    no_identitas: Number,
    telp_nsb: Number,
    pekerjaan: String,

   });
   const nasabah = mongoose.model("nasabah", nasabahSchema);
   const arya = new nasabah({
    id_nasabah: 001001 ,
    nama_nsb: "Arya Susilo",
    gender_nsb: "Laki-laki",
    alamat: "Jl. Raya Bekasi",
    kota: "Bekasi",
    no_identitas: 3216020709123456,
    no_telp: 089601010202,
    pekerjaan: "Karyawan Swasta"
   });
   const rian = new nasabah({
    id_nasabah: 001002 ,
    nama_nsb: "Rian Bagus",
    gender: "Laki-laki",
    alamat: "Jl. Pegangsaan No.18",
    kota: "Jakarta",
    no_identitas: 3175092145145642,
    no_telp: 089613245678,
    pekerjaan: "PNS"
   });
   const andi = new nasabah({
    id_nasabah: 001003 ,
    nama_nsb: "Andi Mulya",
    gender: "Laki-laki",
    alamat: "Jl. Kota Muda",
    kota: "Jakarta",
    no_identitas: 3175098973213524,
    no_telp: 085512323421,
    pekerjaan: "TNI"
   });
   const sarah = new nasabah({
    id_nasabah: 001004 ,
    nama_nsb: "Sarah Sutiawan",
    gender: "Perempuan",
    alamat: "Jl. Kota Tua",
    kota: "Jakarta",
    no_identitas: 3175129087345678,
    no_telp: 081288908787,
    pekerjaan: "IRT"
   });
   const slamet = new nasabah({
    id_nasabah: 001005 ,
    nama_nsb: "Slamet Sejati",
    gender: "Laki-laki",
    alamat: "Jl. Paku Jaya",
    kota: "Bekasi",
    no_identitas: 3216098163840973,
    no_telp: 082117986413,
    pekerjaan: "POLRI"
   });
   const maryani = new nasabah({
    id_nasabah: 001006 ,
    nama_nsb: "Maryani Susanti",
    gender: "Perempuan",
    alamat: "Jl. Jalan Bersama Kamu",
    kota: "Bekasi",
    no_identitas: 3216022003948569,
    no_telp: 0821472749530,
    pekerjaan: "Pedagang"
   });
   const budi = new nasabah({
    id_nasabah: 001007 ,
    nama_nsb: "Budi Prasetyo",
    gender: "Laki-laki",
    alamat: "Jl. Raya Ragunan",
    kota: "Jakarta",
    no_identitas: 3175029492582599,
    no_telp: 0896103204693,
    pekerjaan: "Dosen"
   });
   const roy = new nasabah({
    id_nasabah: 001015,
    nama_nsb: "Roy Suryo",
    gender: "Laki-laki",
    alamat: "Jl. Politisi Sangat Miris",
    kota: "Jakarta",
    no_identitas: 3175098165543265,
    no_telp: 082117986413,
    pekerjaan: "Politikus"
   });
   const ragil = new nasabah({
    id_nasabah: 001014,
    nama_nsb: "Ragil Hermasyah",
    gender: "Laki-laki",
    alamat: "Jl. Penuh Dosa",
    kota: "Bogor",
    no_identitas: 3329067538070329,
    no_telp: 089912697805,
    pekerjaan: "Musisi"
   });
   const sri = new nasabah({
    id_nasabah: 001010 ,
    nama_nsb: "Sri Mulyani",
    gender: "Perempuan",
    alamat: "Jl. Menuju Kekuasaan",
    kota: "Bogor",
    no_identitas: 3329834086403453,
    no_telp: 082132486413,
    pekerjaan: "Politikus"
   });
   //Mengecek apakah data sudah tersimpan atau error
    nasabah.insertMany(
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
//Membuat Data
