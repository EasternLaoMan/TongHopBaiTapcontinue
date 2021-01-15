console.log("Homework Seeson 2");
// Bai 1
var x = prompt("Nhập Số Nguyên Dương mà bạn muốn đảo Ngược !");
var y;
var z = 0;
while(x > 0 && x !== 10) {
        y = x % 10;
        x = Math.floor(x / 10);
        z = y + z*10;
    } console.log(z);
if(x == 10) {console.log("Kết Quả là : 01");}
// Bai 3
console.log("Xem Bạn gái hiện tại có hợp hôn không ?");
var today = new Date();
var namhientai = today.getFullYear();
var m = prompt("Nhập năm sinh bạn gái bạn (VD 1999):");
var n = prompt("Nhập năm sinh của bạn :");
if(namhientai - m < 16 || namhientai - n < 16 ) 
{console.log("Cảnh Báo: xxx với người dưới 16 tuổi sẽ bị Phạt Tù bất kể mọi Lí do !!!");} 
else { 
    if(m % 4 == 0 && m - n <= 5) {console.log("Cưới Ngay đi !");} 
    else {console.log("Rất tiếc. Hy vọng bạn sẽ tìm ra Tình Yêu mới :)")}}
// Bai 2
console.log("Tính Tiền Taxi");
var k = 0;
var i = prompt("Nhập Số Km bạn đã đi");
i = parseFloat(i);
if(i>0 || i ==0) {
if(i == 0) {console.log("Xe Không đi không mất tiền :D");} {
    if(0 < i && i <= 50 ) {console.log(i,"$");}
        if(50 < i && i <= 100) {k = (i-50)*1.5 + i;console.log(k+"$");}
        {k = (i-100)*2 + 50*1.5 + 50;console.log(k+"$");}
    }} 
    {console.log("Định Ăn Gian à em :D");}