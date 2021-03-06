//Membuat koneksi
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-koperasi-simpan-pinjam");

const transaksiSchema = new mongoose.Schema({
    tgl_transaksi: String,
    jenis_transaksi: String,
    nama_nasabah: String,
    gender_nsb: String,
    telp_nsb: Number,
    pekerjaan_nsb: String,
    jml_transaksi: Number,
    
   });
   const transaki = mongoose.model("transaksi", transaksiSchema);
   //Pinjaman
   const arya = new transaksi({
        tgl_transaksi: "2022-03-12",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Arya Susilo" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 089601010202,
        pekerjaan_nsb: "Karyawan Swasta",
        jml_transaksi: 100000 ,
    });
    const rian = new transaksi({
        tgl_transaksi: "2022-06-01",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Rian Bagus" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 089613245678,
        pekerjaan_nsb: "PNS",
        jml_transaksi: 300000 ,
    });
    const andi = new transaksi({
        tgl_transaksi: "2022-06-14",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Andi Mulya" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 085512323421,
        pekerjaan_nsb: "TNI",
        jml_transaksi: 200000 ,
    });
    const sarah = new transaksi({
        tgl_transaksi: "2022-06-28",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Sarah Sutiawan" ,
        gender_nsb: "Perempuan" ,
        telp_nsb: 081288908787,
        pekerjaan_nsb: "IRT",
        jml_transaksi: 500000 ,
    });
    const slamet = new transaksi({
        tgl_transaksi: "2022-04-23",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Slamet Sejati" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 082117986413,
        pekerjaan_nsb: "POLRI",
        jml_transaksi: 700000 ,
    });
    const budi = new transaksi({
        tgl_transaksi: "2022-02-21",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Budi Prasetyo" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 0896103204693,
        pekerjaan_nsb: "PEDAGANG",
        jml_transaksi: 800000 ,
    });
    const maryani = new transaksi({
        tgl_transaksi: "2022-01-27",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Maryani Susanti" ,
        gender_nsb: "Perempuan" ,
        telp_nsb: 0821472749530,
        pekerjaan_nsb: "PEDAGANG",
        jml_transaksi: 100000 ,
    });
    const roy = new transaksi({
        tgl_transaksi: "2022-07-13",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Roy Suryo" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 082117986413,
        pekerjaan_nsb: "POLITIKUS",
        jml_transaksi: 300000 ,
    });
    const ragil = new transaksi({
        tgl_transaksi: "2022-07-19",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Ragil Hermansyah" ,
        gender_nsb: "Laki-Laki" ,
        telp_nsb: 089912697805,
        pekerjaan_nsb: "MUSISI",
        jml_transaksi: 500000 ,
    });
    const sri = new transaksi({
        tgl_transaksi: "2022-05-25",
        jenis_transaksi: "Pinjaman" ,
        nama_nasabah: "Sry Mulyani" ,
        gender_nsb: "Perempuan" ,
        telp_nsb: 082132486413,
        pekerjaan_nsb: "",
        jml_transaksi: 400000 ,
    });
    const  = new transaksi({
        tgl_transaksi: "",
        jenis_transaksi: "Simpanan" ,
        nama_nasabah: "" ,
        gender_nsb: "" ,
        telp_nsb: ,
        pekerjaan_nsb: "",
        jml_transaksi: 400000 ,
    });

    //Simpanan
    
   //Mengecek apakah data sudah tersimpan atau error
    pegawai.insertMany(
    [arya, rian, andi, sarah, slamet, naryabi, budi, roy, ragil, sri],
    function (error) {
    if (error) {
    console.log(error);
    } else {
    console.log("Data Berhasil Disimpan!");
    mongoose.connection.close();
    }
    }
    );
