export const formatMoney = (value, fixedDigits = 2) => {
  // const lang = localStorage.getItem('lang')
  const number = Number(value);
  let displayPrice = value;
  // integer
  if (Number.isInteger(number)) {
    displayPrice = new Intl.NumberFormat().format(number);
  }
  // float
  if (!Number.isInteger(number)) {
    const fixNumber = Number(number.toFixed(fixedDigits));
    displayPrice = new Intl.NumberFormat().format(fixNumber);
  }

  // if (lang === 'en') {
  //   displayPrice = `$${displayPrice}`
  // } else if (lang === 'vi') {
  //   displayPrice = `${displayPrice}₫`
  // }

  displayPrice = `${displayPrice} ₫`;

  return displayPrice;
};

export default {
  formatMoney
}
