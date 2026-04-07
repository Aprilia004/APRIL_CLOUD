function tambahTugas() {
    const tugas = document.getElementById("inputTugas").value;
    const mulai = document.getElementById("jamMulai").value;
    const selesai = document.getElementById("jamSelesai").value;

    if (tugas === "" || mulai === "" || selesai === "") {
        alert("Isi semua dulu!");
        return;
    }

    // Hitung durasi
    const durasi = hitungDurasi(mulai, selesai);

    const li = document.createElement("li");
    li.innerHTML = `
        <span>
            ${tugas} <br>
            🕒 ${mulai} - ${selesai} <br>
            ⏱️ Durasi: ${durasi}
        </span>
        <button class="hapus" onclick="hapusTugas(this)">X</button>
    `;

    document.getElementById("daftarTugas").appendChild(li);

    // reset input
    document.getElementById("inputTugas").value = "";
    document.getElementById("jamMulai").value = "";
    document.getElementById("jamSelesai").value = "";
}

function hapusTugas(btn) {
    btn.parentElement.remove();
}

function hitungDurasi(mulai, selesai) {
    const [jam1, menit1] = mulai.split(":").map(Number);
    const [jam2, menit2] = selesai.split(":").map(Number);

    let total1 = jam1 * 60 + menit1;
    let total2 = jam2 * 60 + menit2;

    let selisih = total2 - total1;

    if (selisih < 0) {
        selisih += 24 * 60; // kalau lewat tengah malam
    }

    const jam = Math.floor(selisih / 60);
    const menit = selisih % 60;

    return `${jam} jam ${menit} menit`;
}