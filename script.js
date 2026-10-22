function cekNilai () {
    let inputnilai = Number(document.getElementById("nilai").value);
    let grade;

    const hasil = document.getElementById("hasil");
    let input = document.getElementById("nilai").value;
    let nilai = Number(input);

    if (inputnilai === "" || nilai < 0 || nilai > 100) {
      hasil.innerHTML = "Masukkan nilai antara 0 sampai 100!";
      return;
    }

    if (nilai >= 90) {
      grade = "Mantap bro";
    } else if (nilai >= 80) {
      grade = "B";
    } else if (nilai >= 70) {
      grade = "C";
    } else {
      grade = "D";
    }

    document.getElementById("hasil").innerHTML = "Nilai kamu: " + grade
}