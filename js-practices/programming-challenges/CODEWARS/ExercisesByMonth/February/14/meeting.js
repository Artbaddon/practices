function meeting(s) {
  let arr = s
    .split(";")
    .map(
      (ele) => "(" + ele.toUpperCase().split(":").reverse().join(", ") + ")"
    );

  arr.sort();
  return arr.join("");
}
let s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
