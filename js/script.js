// Membuat constiabel untuk tombol hitung luas segitiga dan elemen-elemen output
const submitBtnLuas = document.getElementById('submit-luas');
const outputAlas = document.getElementById('desc-alas');
const outputTinggi = document.getElementById('desc-tinggi');
const outputRumus = document.getElementById('desc-rumus');
const outputHitung = document.getElementById('desc-jawaban');

// Membuat constiabel untuk tombol hitung keliling segitiga dan elemen-elemen output
const submitBtnKel = document.getElementById('submit-keliling');
const outputSisisatu = document.getElementById('desc-Sab');
const outputSisidua = document.getElementById('desc-Sac');
const outputSisitiga = document.getElementById('desc-Sbc');
const outputCara = document.getElementById('desc-cara');
const outputHasil = document.getElementById('desc-hasil');

// Membuat constiabel untuk kolom - kolom input luas segitiga
const inputAlas = document.getElementById('alas');
const inputTinggi = document.getElementById('tinggi');

// Membuat constiabel untuk kolom - kolom input keliling segitiga
const inputS1 = document.getElementById('sisi-satu');
const inputS2 = document.getElementById('sisi-dua');
const inputS3 = document.getElementById('sisi-tiga');

//Membuat validasi input pada kolom input alas 
inputAlas.addEventListener('input', function () {
    const valueAlas = inputAlas.value
    if (inputValidation(valueAlas)) {
        console.log("succes");
        submitBtnLuas.disabled = false;
    } else {
        console.log('failed');
        submitBtnLuas.disabled = true;
    }
})

//Membuat validasi input pada kolom input tinggi
inputTinggi.addEventListener('input', function () {
    const valueTinggi = inputTinggi.value
    if (inputValidation(valueTinggi)) {
        console.log("succes");
        submitBtnLuas.disabled = false;
    } else {
        console.log('failed');
        submitBtnLuas.disabled = true;
    }
})

//Membuat validasi input pada kolom input sisi AB 
inputS1.addEventListener('input', function () {
    const valueS1 = inputS1.value
    if (inputValidation(valueS1)) {
        console.log("succes");
        submitBtnKel.disabled = false;
    } else {
        console.log('failed');
        submitBtnKel.disabled = true;
    }
})

//Membuat validasi input pada kolom input sisi AC
inputS2.addEventListener('input', function () {
    const valueS2 = inputS2.value
    if (inputValidation(valueS2)) {
        console.log("succes");
        submitBtnKel.disabled = false;
    } else {
        console.log('failed');
        submitBtnKel.disabled = true;
    }
})

//Membuat validasi input pada kolom input tinggi
inputS3.addEventListener('input', function () {
    const valueS3 = inputS3.value
    if (inputValidation(valueS3)) {
        console.log("succes");
        submitBtnKel.disabled = false;
    } else {
        console.log('failed');
        submitBtnKel.disabled = true;
    }
})

//Membuat function untuk membatasi input hanya angka pada kolom input
function inputValidation(input) {
    const intergerRegex = /^-?\d+$/;
    return intergerRegex.test(input)
}

// Event listener untuk tombol hitung luas segitiga
document.addEventListener('DOMContentLoaded', function () {
    submitBtnLuas.addEventListener('click', function () {
        // Mengambil nilai alas dan tinggi dari input
        const alas = parseFloat(inputAlas.value);
        const tinggi = parseFloat(inputTinggi.value);
        const luas = 0.5 * alas * tinggi;
        outputAlas.textContent = `= ${alas}`;
        outputTinggi.textContent = `= ${tinggi}`;
        outputRumus.textContent = `L = 1/2 X ${alas} X ${tinggi}`;
        outputHitung.textContent = `= ${luas}`;
    });
});

// Tombol reset untuk mengosongkan input dan output luas segitiga
const resetBtnLuas = document.getElementById('reset-luas');
resetBtnLuas.addEventListener('click', function () {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    outputAlas.textContent = ``;
    outputTinggi.textContent = ``;
    outputRumus.textContent = ``;
    outputHitung.textContent = ``;
});

// Event listener untuk tombol hitung keliling segitiga
document.addEventListener('DOMContentLoaded', function () {
    submitBtnKel.addEventListener('click', function () {
        // Mengambil nilai sisi-sisi dari input
        const S1 = parseFloat(inputS1.value);
        const S2 = parseFloat(inputS2.value);
        const S3 = parseFloat(inputS3.value);
        const kel = S1 + S2 + S3;
        outputSisisatu.textContent = `= ${S1}`;
        outputSisidua.textContent = `= ${S2}`;
        outputSisitiga.textContent = `= ${S3}`;
        outputCara.textContent = `K = ${S1} + ${S2} + ${S3}`;
        outputHasil.textContent = `= ${kel}`;
    });
});

// Tombol reset untuk mengosongkan input dan output keliling segitiga
const resetBtnKel = document.getElementById('reset-keliling');
resetBtnKel.addEventListener('click', function () {
    document.getElementById('sisi-satu').value = '';
    document.getElementById('sisi-dua').value = '';
    document.getElementById('sisi-tiga').value = '';
    outputSisisatu.textContent = '';
    outputSisidua.textContent = '';
    outputSisitiga.textContent = '';
    outputCara.textContent = '';
    outputHasil.textContent = '';
});


