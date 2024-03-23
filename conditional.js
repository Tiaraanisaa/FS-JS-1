/*
STUDI CASE 1:
bil. ganjil atau genap ?

algoritma:
1. buat variable number
2. cek jika number modulus 2 sama dengan 0, maka genap
3. cek jika number modulus 2 sama dengan 1, maka ganjil

pseudocode:
STORE number WITH ANY NUMBER
IF number MOD 2 EQUAL 0 THEN
PRINT "Genap"
ELSE
PRINT "Ganjil"
ENDIF
*/
var number = 10;
if(number % 2 === 0){
    console.log("Genap")
} else{
    console.log("Ganjil")
}


/*
STUDI CASE 2:
Grade Nilai
score 100 - 85, grade A
score 84 - 70, grade B
score 69 - 50, grade C
score 49 - 30, grade D
score 30 - 0, grade E
*/
