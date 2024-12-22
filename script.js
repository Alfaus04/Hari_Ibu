document.addEventListener("DOMContentLoaded", function() {
    const btnTampilkan = document.getElementById("btnTampilkan");
    const namaIbu = document.getElementById("namaIbu");
    const pesanUcapan = document.getElementById("pesanUcapan");
    const bungaAnimasi = document.getElementById("bungaAnimasi");
    const tema = document.getElementById("tema");

    // Fungsi untuk menampilkan ucapan
    btnTampilkan.addEventListener("click", function() {
        if (namaIbu.value.trim() === "") {
            alert("Mohon masukkan nama ibu!");
            return;
        }
        pesanUcapan.textContent = `Selamat Hari Ibu, ${namaIbu.value}!`;
        pesanUcapan.style.display = "block";
        bungaAnimasi.style.display = "block";
    });

    // Fungsi untuk mengubah tema
    tema.addEventListener("change", function() {
        document.body.className = ""; // Reset tema
        if (tema.value === "pink") {
            document.body.classList.add("pink");
        } else if (tema.value === "blue") {
            document.body.classList.add("blue");
        }
    });
});
