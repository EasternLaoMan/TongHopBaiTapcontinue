// BAI TAP VE NHA: viet 1 Function
// Tham so 1 : 1 Mang cho truoc
// Tham so 2 : 1 Bien ma chung ta can tim
// Neu tim thay Bien trong Mang thi se tra ve Vi tri cua Bien do trong Mang ?
//
//
let Thamso1 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 2, 2, 0, 100, 999, "nhiều lắm"];
console.log(
  "Trong Ngân Hàng có ",
  Thamso1.length,
  " hộp đựng tiền với số tiền tương ứng (Tỷ $) ",
  Thamso1
);
function timvitri(array, x) {
  i = 0;
  for (index = 0; index < array.length; index++) {
    if (array[index] == x) {
      i = ++i;
      console.log("Hộp đựng ", x, " tỷ $, nằm ở vị trí thứ ", index);
    }
  }
  if (i === 0) {
    console.log("Rất Tiếc Em chẳng được đồng nào :D ");
  }
}
let x = prompt("Em thích Bao Nhiêu tỷ $ nào ??? ");
timvitri(Thamso1, x);
