// https://github.com/imran1337/js-assignment-3

// kilometer to meter
const kilometerToMeter = (kilometer = 0) =>
  kilometer < 0
    ? `negative value not allowed`
    : typeof kilometer === "string"
    ? `Invalid value.Value can't be string`
    : kilometer * 1000;

// budgetCalculator
const budgetCalculator = (watch = 0, phone = 0, laptop = 0) => {
  const watchPrice = 50;
  const phonePrice = 100;
  const laptopPrice = 500;
  return watch < 0 || phone < 0 || laptop < 0
    ? `negative value not allowed`
    : typeof watch === "string" ||
      typeof phone === "string" ||
      typeof laptop === "string"
    ? `Invalid value.Value can't be string`
    : watch * watchPrice + phone * phonePrice + laptop * laptopPrice;
};

// hotel cost calculator
//1-10 = 100 , 11-20 = 80 , 21-infinity = 50;
const hotelCost = (day = 0) =>
  day < 0 || typeof day === "string" || typeof day === "boolean"
    ? `Invalid Value`
    : day <= 10
    ? day * 100
    : day <= 20
    ? 10 * 100 + (day - 10) * 80
    : 10 * 100 + 10 * 80 + (day - 20) * 50;

// megaFriend
const megaFriend = (nameArr = 0) =>
  nameArr.length <= 0
    ? `empty array`
    : typeof nameArr === "string"
    ? `Value can't be string`
    : nameArr.reduce((previews, current) =>
        previews.length > current.length ? previews : current
      );
