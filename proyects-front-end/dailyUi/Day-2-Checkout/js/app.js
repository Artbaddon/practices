const productInfo = document.querySelectorAll(".product-information");
const priceContainers = document.querySelectorAll(".product-price");
let totalPriceContainer =
  document.querySelector(".total-price").lastElementChild;
let totalPrice = 0;
productInfo.forEach((info) => {
  function changeItemPrice(val) {
    let priceNum = price.innerText.replace(/[$]/g, "");
    let basePriceItem = basePrice.innerText.replace(/[$]/g, "");

    switch (val) {
      case "increment":
        console.log(priceNum);
        if (basePriceItem * 9 >=3 priceNum) {
          price.innerText = "$" + (basePriceItem * counterTotal).toFixed(2);
        } else {
          price.innerText = "$" + (basePriceItem * 9).toFixed(2);
        }

        break;

      default:
        if (priceNum >= basePriceItem) {
          price.innerText = "$" + (priceNum - basePriceItem).toFixed(2);
        } else {
          price.innerText = "$" + +basePriceItem.toFixed(2);
        }
        break;
    }
  }
  function incrementCounter() {
    if (counterTotal >= 9) {
      counterTotal = 9;
      totalNum.innerText = counterTotal;
    } else {
      counterTotal++;
      totalNum.innerText = counterTotal;
    }
    changeItemPrice("increment");
  }
  function decrementCounter() {
    if (counterTotal < 2) {
      counterTotal = 1;
      totalNum.innerText = counterTotal;
    } else {
      counterTotal--;
      totalNum.innerText = counterTotal;
    }
    changeItemPrice("decrement");
  }
  let buttonDec = info.firstElementChild.nextElementSibling.firstElementChild;
  let price = info.lastElementChild;
  let basePrice = info.firstElementChild.nextElementSibling.nextElementSibling;
  let buttonInc = info.firstElementChild.nextElementSibling.lastElementChild;

  let totalNum = buttonDec.nextElementSibling;
  let counterTotal = totalNum.innerText;
  buttonInc.addEventListener("click", incrementCounter);
  buttonDec.addEventListener("click", decrementCounter);
});

function calculateTotalPrice() {
  for (keys of priceContainers.values()) {
    totalPrice += parseFloat(String(keys.innerText).replace(/[$]/g, ""));
  }
  totalPriceContainer.innerText = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

calculateTotalPrice();
