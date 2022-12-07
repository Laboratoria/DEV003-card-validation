import validator from "./validator.js";

console.log(validator.maskify("4556364607935616"));
console.log(validator.maskify("64607935616"));
console.log(validator.maskify("1"));
console.log(validator.maskify(""));

console.log(validator.isValid("64607935616"));
console.log(validator.isValid("4083952015263"));
console.log(validator.isValid("79927398713"));

const password = document.getElementById("cardNumber");
const cvvEl = document.getElementById("cvv");

// validator.setInputFilter(
//   password,
//   (value) => {
//     return /^\d*$/.test(value);
//   },
//   "Solo dígitos"
// );

validator.setInputFilter(
  cvvEl,
  (value) => {
    // regex
    return /^\d*$/.test(value);
  },
  "Solo dígitos"
);

password.addEventListener("input", (event) => {
  const el = event.target;
  // console.log(el, el.value, validator.isValid(el.value));
  if (!validator.isValid(el.value) && el.value.length >= 12) {
    el.setCustomValidity("La tarjeta no es válida");
    el.reportValidity();
  } else {
    el.setCustomValidity("");
  }
});

password.addEventListener("blur", (event) => {
  const el = event.target;
  el.maskedValue = el.value;
  el.value = validator.maskify(el.value);
  el.removeOnlyDigitsEvents();
});

password.addEventListener("focus", (event) => {
  const el = event.target;
  el.value = el.maskedValue || "";
  el.removeOnlyDigitsEvents = validator.setInputFilter(
    password,
    (value) => /^\d*$/.test(value),
    "Solo dígitos"
  );
});

// validator.setInputFilter(
//   valueNumberCard,
//   (value) => {
//     return validator.isValid(value);
//   },
//   "La tarjeta no es válida"
// );
