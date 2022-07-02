//Membuat koneksi
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

const pegawaiSchema = new mongoose.Schema({
    Id_pegawai: Number,
    Nama: String,
    Telepon: Number,
    Gender: String,
   });
   const pegawai = mongoose.model("pegawai", pegawaiSchema);
   const fandi = new pegawai({
    Id_Pegawai: 2019230101 ,
    Nama: "Fandi Ahmad",
    Telepon: 089695702303,
    Gender: "Laki laki",
   });
   const bayu = new pegawai({
    id_pegawai: 20202300903 ,
    Nama: "Bayu Afif Nuranto",
    Telepon: 081215430175,
    Gender: "Laki laki",
   });
   const imam = new pegawai({
    id_pegawai: 2019230103 ,
    Nama: "Imam Fadhilah Rahman",
    Telepon: 081917160541,
    Gender: "Laki laki",
   });
   const raihan = new pegawai({
    id_pegawai: 2019230089 ,
    Nama: "Raihan Syah Putra Nasution",
    Telepon: 081284343742,
    Gender: "Laki laki",
   });
   const budi = new pegawai({
    id_pegawai: 000601 ,
    Nama: "Budiman Jaya Wijaya",
    Telepon: 089766557923,
    Gender: "Laki laki",
   });

   //Mengecek apakah data sudah tersimpan atau error
    pegawai.insertMany(
    [fandi, bayu, imam, raihan, budi],
    function (error) {
    if (error) {
    console.log(error);
    } else {
    console.log("Data Berhasil Disimpan!");
    mongoose.connection.close();
    }
    }
    );
