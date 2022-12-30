//alert("hola");
const validator = {

   isValid: function (cardNumber) {
      let sumaTotal = 0;
      const numeros = Array.from(cardNumber,number);
      for (let i = 0; i <numeros.length; i + - 2){
         let doblarNumeros = numeros[i]*2
         console.log(doblarNumeros);
         if(doblarNumeros > 9){
            doblarNumeros = doblarNumeros -9
         }
         sumaTotal = sumaTotal + doblarNumeros
      }
   for (let i = 1; i < numeros.length; i + - 2){
      let imparNumeros = numeros[i]
      sumaTotal = sumaTotal + imparNumeros
   }
   return (sumaTotal%10 === 0);
     },

   
      

  
   maskify: function(cardNumber){
      const sinespacio=cardNumber.replace(/\s/g,"");
      
      let mask=sinespacio
      if (sinespacio.length<4){
         const cadena1=sinespacio.slice(0,-4).replace(/[\da-zA-Z]/g,"#")
         const cadena2=sinespacio.slice(-4)
         mask=cadena1+cadena2 
         console.log(mask)
         return mask
      }
      return mask
   }
   
   
}






  
/*isValid: function (cardNumber) {
   let sumaTotal = 0;
   const numeros = Array.from(cardNumber,number);
   for (let i = 0; i <numeros.length; i + - 2){
      let doblarNumeros = numeros[i]*2
      if(doblarNumeros > 9){
         doblarNumeros = doblarNumeros -9
      }
      sumaTotal = sumaTotal + doblarNumeros
   }
for (let i = 1; i < numeros.length; i + - 2)
   let imparNumeros = numeros[i]
   sumaTotal = sumaTotal + imparNumeros
};
 return (sumaTotal % 10 === 0);*/
   

    
    
    export default validator;
