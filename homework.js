var angkaRandoms = [];
for (let i=0 ; i < 100; i++){
   let angkaRandom = Math.floor(Math.random() * 50)+1;
   angkaRandoms.push(angkaRandom)
}

console.log(angkaRandoms);

// pecah jadi 2 bagian (ganjil & genap)

let bilanganGanjil = []
let bilanganGenap = []

for( let i=0; i < angkaRandoms.length; i++){
   if (i % 2 == 0){
      bilanganGenap.push(angkaRandoms[i])
   } else {
      bilanganGanjil.push(angkaRandoms[i])
   }
}

console.log("===== bilangan genap =====");
console.log(bilanganGenap);
console.log("===== bilangan ganjil =====");
console.log(bilanganGanjil);

// min max 

function nilaiMax(angkaRandoms){
   let max = angkaRandoms[0]
   for (let i = 0; i < angkaRandoms.length; i++){
   if (max < angkaRandoms[i]){
      max = angkaRandoms[i]
   }
}
   return max
}

function nilaiMin(angkaRandoms){
   let min = angkaRandoms[0]
   for (let i = 0; i < angkaRandoms.length; i++){
   if (min > angkaRandoms[i]){
      min = angkaRandoms[i]
   }
   }
   return min
}


nilaiMaxGenap = nilaiMax(bilanganGenap)
nilaiMinGenap = nilaiMin(bilanganGenap)
console.log("max genap ="+ nilaiMaxGenap);
console.log("min genap ="+ nilaiMinGenap);

nilaiMaxGanjil = nilaiMax(bilanganGanjil)
nilaiMinganjil = nilaiMin(bilanganGanjil)
console.log("max ganjil ="+ nilaiMaxGanjil);
console.log("min ganjil ="+ nilaiMinganjil);



// total & rata2

function total(angkaRandoms){
   let total = 0
   for (let i =0; i < angkaRandoms.length; i++){
      total += angkaRandoms[i]
   }
   return total
}

console.log("Bilangan genap");
totalBilGenap = total(bilanganGenap)
rata2Genap = totalBilGenap / 50
console.log("Total = "+totalBilGenap);
console.log("rata2 bilangan genap = "+rata2Genap);

console.log("Bilangan ganjil");
totalBilGanjil = total(bilanganGanjil)
rata2Ganjil = totalBilGanjil / 50
console.log("Total = "+totalBilGanjil);
console.log("rata2 bilangan ganjil = "+rata2Ganjil);



// perbandingan min & max

if (nilaiMaxGenap == nilaiMaxGanjil){
   console.log("nilai max sama besar")
}
   else if (nilaiMaxGenap > nilaiMaxGanjil){
      console.log("nilai max genap lebih besar")
}  else if(nilaiMaxGenap < nilaiMaxGanjil){
         console.log("nilai min lebih besar");
      }

if (nilaiMinGenap == nilaiMaxGanjil){
   console.log("nilai min sama besar")
}
   else if(nilaiMinGenap > nilaiMinganjil){
      console.log("nilai min genap lebih besar")
}
   else if(nilaiMinGenap < nilaiMinganjil){
      console.log("nilai min genap lebih kecil");
   }


// perbandingan total rata2
if (totalBilGenap == totalBilGanjil){
   console.log("total kedua nya sama");
}
else if(totalBilGenap > totalBilGanjil){
   console.log("Total genap lebih besar");
}
else if(totalBilGenap < totalBilGanjil){
   console.log("Total genap lebih kecil");
}

if (rata2Genap = rata2Ganjil){
   console.log("rata2 kedua nya sama");
}
else if (rata2Genap > rata2Ganjil){
   console.log("rata2 genap lebih besar");
}
else if (rata2Genap < rata2Ganjil){
   console.log("rata2 genap lebih kecil");
}