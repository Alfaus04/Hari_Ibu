document.getElementById('btnTampilkan').addEventListener('click', function() {
    var namaIbu = document.getElementById('namaIbu').value;
    var pesanUcapan = document.getElementById('pesanUcapan');
    var bungaAnimasi = document.getElementById('bungaAnimasi');

    if (namaIbu) {
        pesanUcapan.style.display = 'block';
        pesanUcapan.textContent = 'Selamat Hari Ibu, ' + namaIbu + '! Makasih banyak, Bu, atas segala kasih sayang dan pengorbanannya. Maafin anak-anak yang nggak selalu perfect. Semoga doa Ibu selalu ngiringin kita, dan kita bisa jadi anak yang nggak bikin Ibu kecewa. I love you, Bu!';
        
        // Menampilkan animasi bunga
        bungaAnimasi.style.display = 'block';
    } else {
        alert('Tolong masukkan nama ibu!');
    }
});

// Mengatur tema berdasarkan pilihan user
document.getElementById('tema').addEventListener('change', function(event) {
    var selectedTema = event.target.value;

    if (selectedTema === 'pink') {
        document.body.className = 'pink-theme';
    } else if (selectedTema === 'blue') {
        document.body.className = 'blue-theme';
    } else {
        document.body.className = '';
    }
});
