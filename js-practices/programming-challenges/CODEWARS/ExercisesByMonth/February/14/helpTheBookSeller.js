function stockList(books, categories) {
  let categoriesObj = {};
  for (category of categories) {
    categoriesObj[category] = 0;
  }

  let splitedBooks = books.map((ele) => ele.split(" "));
  for (let i = 0; i < splitedBooks.length; i++) {
    const bookTitle = splitedBooks[i][0];
    const bookQty = splitedBooks[i][1];

    if (categoriesObj[bookTitle[0]] !== undefined) {
      categoriesObj[bookTitle[0]] += +bookQty;
    }
  }
  let valuesCat = Object.values(categoriesObj).reduce((a, b) => a + b, 0);

  let categoriesArr = Object.entries(categoriesObj);
  let result = categoriesArr.map((ele) => "(" + ele.join(" : ") + ")");
  return valuesCat > 0 ? result.join(" - ") : "";
}
let books = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let categories = ["A", "B", "C", "D"];
console.log(stockList(books, categories));
