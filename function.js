//STUDI CASE 1
// cek jumlah faktor

function cekJumlahFaktor(num) {
    var faktor = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            faktor++;
        }
    }
    return faktor;
}
console.log(cekJumlahFaktor(12))


// STUDI CASE 2
//cek bilangan prima atau bukan

function cekBilanganPrima(num) {
    var jumlahFaktor = cekJumlahFaktor(num);
    if(jumlahFaktor === 2){
        return "Bilangan Prima";
    } else{
        return "Bukan Bilangan Prima";
    }
}
console.log(cekBilanganPrima(19))


// STUDI CASE 3
// memecah kalimat menjadi per kata

function pecahKalimat(str) {
    var arrResult = [];
    var temp = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            //console.log(str[i])
            temp += str[i];
        } else{
            arrResult.push(temp);
            temp = "";
        }
        if (i === str.length - 1) {
            arrResult.push(temp);
            temp = "";
        }
    }
    console.log(arrResult);
}


// STUDI CASE 4
// menghitung rata-rata
function countAverage(numbers){
    var total = 0;
    for(var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return (total / numbers.length).toFixed(2);
}
console.log(countAverage)