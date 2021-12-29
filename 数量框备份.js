// 减少按钮逻辑
$(".fx-jian-button").click(function () {
  let value = 1;
  let inputNumber = Number($(".fx-quantity-input").val());
  value = inputNumber - 1;
  if (value <= 0) {
    value = 1;
  }
  $(".fx-quantity-input").val(value);
  checkSell();
});
// 增加按钮逻辑
$(".fx-jia-button").click(function () {
  let value = 1;
  let inputNumber = Number($(".fx-quantity-input").val());
  value = inputNumber + 1;
  $(".fx-quantity-input").val(value);
  checkSell();
});
// input失焦事件逻辑
$(".fx-quantity-input").blur(function () {
  // 输入框失去焦点
  let inputNumber = Number($(".fx-quantity-input").val());
  if (!/^[1-9]{1,5}$/.test(inputNumber)) {
    $(".fx-quantity-input").val(1);
  } else {
    $(".fx-quantity-input").val(inputNumber);
  }
  checkSell();
});

// 自定义数量按钮
let numberButtonDom = `
 <div class="fx_product_qty_box">
 <div class="fx_secondary_title">Quantity</div>
 <div class="fx-quantity-box">
     <button class="fx-quantity-button fx-jian-button">-</button>
     <input class="fx-quantity-input"  value="1" type="text" min="1",max="100000">
     <button class="fx-quantity-button fx-jia-button">+</button>
 </div>
</div>
 `;
$(".fx-details-bigBox").after(numberButtonDom);
