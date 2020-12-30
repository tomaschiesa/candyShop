// El metodo de conversion es automatico y agrega el signo de la moneda correspondiente.
// >>> Toma la moneda en que se publico y toma el valor en el que queremos que se muestre de la DB
// Hay varias consultas comentadas que ayudaran a evaluar posibles calculos a la hora de operar con ese modulo de apiDolar.
// Verificar el uso del sctipt apiDolar.js en el EJS que necesitemos convertir. <script src="/js/api/apiDolar.js"></script>
// >>> Se encuentra requerido en este proyecto en forma global de las vistas en (_endBodyScripts.ejs)

function qsA(element) {
  return document.querySelectorAll(element)
}

window.addEventListener('load', function() {
  
  console.log('*********************************************')
  console.log('***** SE ACTIVO LA CONVERSION DE MONEDA AUTOMATICA *****')
  console.log('*********************************************')

  let selectDiscountMoneyConvert = qsA('#discountMoneyConvert');
  let selectPriceFinalMoneyConvert = qsA('#priceFinalMoneyConvert');
  let selectMoneyPublish = qsA('#moneyPublish');
  let selectMoneyDisplay = qsA('#moneyDisplay');
  
  for(let i = 0; i < selectPriceFinalMoneyConvert.length; i++) {

    if (selectMoneyPublish[i].innerText == 2 & selectMoneyDisplay[i].innerText == 1){   
      fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
      .then(function(response) {
        return response.json();
      })
      .then(function(resultado) {
        
        let roundedValueDolarOficial = Math.round(Number(resultado[0].casa.venta.replace(',', '.')) + 2.14062016)
        let discountADolarOficial = Number(selectDiscountMoneyConvert[i].innerText) * roundedValueDolarOficial
        let pesoADolarOficial = Number(selectPriceFinalMoneyConvert[i].innerText) * roundedValueDolarOficial
        
        selectDiscountMoneyConvert[i].innerHTML = `$ ${discountADolarOficial}`
        selectPriceFinalMoneyConvert[i].innerHTML = `$ ${pesoADolarOficial}` 
        
      });

     } if (selectMoneyPublish[i].innerText == 3 & selectMoneyDisplay[i].innerText == 1){   
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(function(response) {
          return response.json();
        })
        .then(function(resultado) {

          let roundedValueDolarBlue = Math.round(Number(resultado[1].casa.venta.replace(',', '.')) + 2.14062016)
          let discountADolarBlue = Number(selectDiscountMoneyConvert[i].innerText) * roundedValueDolarBlue
          let pesoADolarBlue = Number( selectPriceFinalMoneyConvert[i].innerText) * roundedValueDolarBlue
          
          selectDiscountMoneyConvert[i].innerHTML = `$ ${discountADolarBlue}`
          selectPriceFinalMoneyConvert[i].innerHTML = `$ ${pesoADolarBlue}` 
          
        });

      } if (selectMoneyPublish[i].innerText == 1 & selectMoneyDisplay[i].innerText == 1){   
          
          selectDiscountMoneyConvert[i].innerHTML = `$ ${selectDiscountMoneyConvert[i].innerText}`
          selectPriceFinalMoneyConvert[i].innerHTML = `$ ${selectPriceFinalMoneyConvert[i].innerText}` 
          
    } if (selectMoneyPublish[i].innerText == 2 & selectMoneyDisplay[i].innerText == 2){  

      selectDiscountMoneyConvert[i].innerHTML = `u$s ${selectDiscountMoneyConvert[i].innerText}`
      selectPriceFinalMoneyConvert[i].innerHTML = `u$s ${selectPriceFinalMoneyConvert[i].innerText}` 

     } if (selectMoneyPublish[i].innerText == 3 & selectMoneyDisplay[i].innerText == 3){   

      selectDiscountMoneyConvert[i].innerHTML = `u$s blue ${selectDiscountMoneyConvert[i].innerText}`
      selectPriceFinalMoneyConvert[i].innerHTML = `u$s blue ${selectPriceFinalMoneyConvert[i].innerText}` 

     }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // console.log('***** METODO DE CONVERSION u$s a $ a cambio oficial + redondeo *****')
  // console.log('**************************** ACTIVADO ! ****************************')
  // console.log('Cantidad de articulos traidos para iterar -> ' + selectPriceFinalMoneyConvert.length)
  //console.log ('*************** TRAIDO DEL FRONT ***************')
  //console.log('Campo recuperado del EJS front ->' + selectPriceFinalMoneyConvert[i].innerText)
  //console.log('Este es lo mismo traido a numero ->' + selectPriceFinalMoneyConvert[i].innerText.replace('u$s ', ''))
  console.log ('----- CONSULTAS -----')
  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(function(response) {
    return response.json();
  })
  .then(function(resultado) {
    console.log ('----- APi conectada con -> DOLARsi -----')
    console.log (resultado)
    
    let roundedValueDolarOficial = Math.round(Number(resultado[0].casa.venta.replace(',', '.')) + 2.14062016)

    console.log ('----- DOLAR OFICIAL -----')
    console.log (resultado[0].casa.nombre + '-> '+ Number(resultado[0].casa.venta.replace(',', '.')))
    console.log ('Dolar Oficial adicionado y redondeado -> '+ typeof(roundedValueDolarOficial)+ " " + roundedValueDolarOficial)
    
    let roundedValueDolarBlue = Math.round(Number(resultado[1].casa.venta.replace(',', '.')) + 2.14062016)
    console.log ('----- DOLAR BLUE -----')
    console.log (resultado[1].casa.nombre + '-> '+ Number(resultado[1].casa.venta.replace(',', '.')))
    console.log ('Dolar Blue adicionado y redondeado -> '+ typeof(roundedValueDolarBlue)+ " " + roundedValueDolarBlue)
    
    let sumaPuntasDolarBlue = Number(resultado[1].casa.venta.replace(',', '.')) + Number(resultado[1].casa.compra.replace(',', '.'))
    let dolarBluePromedio = sumaPuntasDolarBlue/2
    console.log ('----- DOLAR BLUE PROMEDIO DE PUNTAS -----')
    console.log ('Dolar Blue promediado -> ' + dolarBluePromedio)
    
  });
  
})