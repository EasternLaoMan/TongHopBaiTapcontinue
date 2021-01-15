var mang = [5,5,35,2,5,44,"#",2,5,6,7,8,9];
var YC1 = 0;
var YC2 = 0;
for(i = 0; i <= mang.length - 1; i++) {
    if(mang[i] !== "#") {
        YC1 = YC1 + parseInt(mang[i]);}
        {if(mang[i] === "#") {break}}}
        console.log(YC1);
for(k = mang.length - 1; k >= 0; k--) {
    if(mang[k] !== "#") {
        YC2 = YC2 + parseInt(mang[k]);}
        {if(mang[k] === "#") {break}}}
        console.log(YC2);
// 
var inputTest = [5,5,35,2,5,44,"#",2,5,6,7,8,9];
for (var index = 0; index < inputTest.length; index++)  {
    if (inputTest[index] == "#") {
        vitriDauT = index;
        break;}
    }
var Khobau1 = 0;
for(var index = 0; index < vitriDauT; index++) {
    Khobau1 += inputTest[index];
} console.log(Khobau1);
var Khobau2 = 0;
for(var index = vitriDauT + 1; index < inputTest.length; index++) {
    Khobau2 += inputTest[index];
} console.log(Khobau2);
// 
//
var inputTest = [5,5,35,2,5,44,"#",2,5,6,7,8,9];
var vitriDauThang = inputTest.indexOf("#"); // Xac dinh vi tri dau "#" bang Ham`
// chi 1 Ham nay thay the cho Vong for Dau Tien ben duoi
console.log(vitriDauThang);
for (var index = 0; index < inputTest.length; index++)  {
    if (inputTest[index] == "#") {
        vitriDauT = index;
        break;}
    }
var Khobau1 = 0;
for(var index = 0; index < vitriDauT; index++) {
    Khobau1 += inputTest[index];
} console.log(Khobau1);
var Khobau2 = 0;
for(var index = vitriDauT + 1; index < inputTest.length; index++) {
    Khobau2 += inputTest[index];
} console.log(Khobau2);