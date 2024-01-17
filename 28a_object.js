let nip = prompt("Nip :");
let nama = prompt("Nama :");
let alamat = prompt("Alamat :");
let predikat = prompt("Predikat : ");

    if (predikat == "A"){
        hasil = "Sangat Baik";
    }
    else if (predikat == "B"){
        hasil = "Baik";
    }
    else if (predikat == "C"){
        hasil = "Cukup Baik";
    }
    else if (predikat == "D"){
        hasil = "Kurang Baik";
    }
    else if (predikat == "E"){
        hasil = "Butuh Pelatihan";
    }
    else{
        hasil = "Skill Issue";
    }
    for(let i = 1; i <= 5 ; i++){
    document.write("<h1>===Data Karyawan "+nip+"===</h1><h2>Nip : " +nip+"</h2><h2>Nama : " +nama+"</h2><h2>Alamat : " +alamat+"</h2><h2>Predikat : " +predikat+"</h2><h2>Hasil Kerja Karyawan : "+hasil+"</h2>")
    }