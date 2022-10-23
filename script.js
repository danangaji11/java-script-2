// console.log("selamat pagi")

// // variabel
// let npm = 2125250098
// let nama = "Danang Aji Pangestu"
// let arrayMahasiswa = ["Ronaldo", "messi"];
// let arrayDosen = Array("Ancelotti", "Prep")

// let mahasiswa = { npm: 2125250098, nama: "Danang", hobi:["ngoding", "gaming", "reading"] }

// console.log(arrayMahasiswa[0])
// console.log(arrayDosen[1])
// console.log(mahasiswa.nama)
// console.log(mahasiswa.hobi[0])

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")

let  data = []

function simpan(){
    console.log("Button simpan ditekan")

    console.log(txtNpm.value)
    console.log(txtNama.value)

    data.push(
        {"npm" : txtNpm.value,
        "nama" : txtNama.value}
    )
    tampil()
}

function tampil(){
    listMhs.innerHTML = ""
    data.forEach(listData)
}

function listData(item, index){
    listMhs.innerHTML += item.npm+ "-" + item.nama
}

