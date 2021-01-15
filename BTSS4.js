// 1. Tim Min/Max
var number = [-1,-100,4,2,1,54,65,99,999];
var min = number[0];
for(let index = 1; index < number.length; index++) {
    if(min > number[index]) {
        min = number[index];
    }
} console.log(min);
var max = number[0];
for(let index = 1; index < number.length; index++) {
    if(max < number[index]) {
        max = number[index];
    }
} console.log(max);
// 
// Vong Lap Long Nhau (Nested Loop)
// thong thuong thi Vong for ben ngoai dai dien cho Hang(Row)
// vong for ben Trong dai dien cho Cot (Collumn)
for(var i = 0; i < 6; i++) {
    console.log("Hang thu " + i + " co nhung cot la : ");
    for(var j = 0; j < 5; j++) {
        console.log("Cot thu ", j);}}
var hinhTamGiac = "";
for(var i = 0; i < 10; i++) {
    var hangNgang = "";
    for(var j = 0; j < i + 1; j++) {
        hangNgang += "----";
    }
    hangNgang += "\n";
    hinhTamGiac += hangNgang;
}
console.log(hinhTamGiac);
// 
// Bai Tap
/* Cho 1 Mang [4,5,6,7,8,99]
Yeu cau 1 : Truy den tung Vi Tri tung Phan tu va Cong tat ca cac phan tu con lai
(tru Phan tu chinh tai vi tri do) va In tong ra
Kinh nghiem : Bai toan ma Yeu Cau lay 1 Phan tu cua Mang sau do lam gi do ?!
la dung 2 vong lap for
*/
var number = [4,6,5,14,12,1];
var count1 = 0;
for(let index = 0; index < number.length; index++) {
    if(index != 0) {
        count1 += number[index];
    }
} console.log(count1);
var number = [4,6,5,14,12,1];
for(var index = 0; index < number.length; index++) {
    var total = 0;
    // index chay tu 0 -> 5
    for(let j = 0; j < number.length; j++) {
        // j chay tu 0 -> 5
        if(index != j) {
            // index != j
            total += number[j];
        }
    } console.log(total);
}
//
// Sap Xep Tang (Giam) dan
var number = [4,6,5,9,11,30,25];
console.log(number);
// Sap Xep Tang Dan
for(let i = 0; i < number.length; i++) {
    for(var j = 0; j < number.length; j++) {
        if(number[j] > number[j+1]) // Neu sap xep Giam dan thi Dao nguoc Dau so sanh
        {
            var temp = number[j];
            number[j] = number[j+1];
            number[j+1] = temp;
        }
    }
} console.log("Sau Khi Sap Xep Tang Dan ; ", number);
