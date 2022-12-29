/import validator from ./validator.js;
document.getElementById("button-form")
document.addEventListener("click", tomarNumeroTarjeta);
function tomarNumeroTarjeta() {
  const cardNumber = document.getElementById("cardNumber").value;
  const resultadoisValid = validator.isValid(cardNumber);
  const enmascarar = validator.maskify(cardNumber);
  if (resultadoisValid === true) {
    alert("Tu tarjeta de crédito" + maskify + "es válida");
  } else {
    alert("Tu tarjeta de crédito" + maskify+ "no es válida");
  }
}

export default validator;