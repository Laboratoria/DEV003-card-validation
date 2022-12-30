import validator from './validator.js';
document.getElementById("cardNumber").addEventListener("click", function(event){
  event.preventDefault()
});
/*asi se comenta en js*/
document.getElementById("button-form").addEventListener("click",tomarNumeroTarjeta);
function  tomarNumeroTarjeta(){
  const cardNumber = document.getElementById("cardNumber").value;
  const resultadoisValid = validator.isValid(cardNumber);
  const enmascarar = validator.maskify(cardNumber);
  if (resultadoisValid === true) {
    alert("Tu tarjeta de crédito" + enmascarar + "es válida");
  } else {
    alert("Tu tarjeta de crédito" + enmascarar+ "no es válida");
  }
  
}




//console.log(validator);