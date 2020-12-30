// El metodo de conversion es automatico si se dan las condiciones siguientes.
// >>> Se debe recuperar el campo del valor con el IDtag (priceFinalDolarAPesos)
// >>> El campo recuperado debe contener la sigla 'u$s ' a la izquierda del numero por HTML no por CSS.

// Hay varias consultas comentadas que ayudaran a evaluar posibles calculos a la hora de operar con ese modulo de apiDolar.
// Verificar el uso del sctipt apiDolar.js en el EJS que necesitemos convertir. <script src="/js/api/apiDolar.js"></script>
// >>> Se encuentra requerido en este proyecto en forma global de las vistas en (_endBodyScripts.ejs)

function qsA(element) {
  return document.querySelectorAll(element)
}

window.addEventListener('load', function() {
  
  let selectPriceFinalDolar = qsA('#priceFinalDolarAPesos');
  // console.log('Cantidad de articulos traidos para iterar -> ' + selectPriceFinalDolar.length)
  if (selectPriceFinalDolar[0].innerText.includes('u$s ')){
    console.log('***** METODO DE CONVERSION u$s a $ a cambio oficial + redondeo *****')
    console.log('**************************** ACTIVADO ! ****************************')
  for(let i = 0; i < selectPriceFinalDolar.length; i++) {
    //console.log ('*************** TRAIDO DEL FRONT ***************')
    //console.log('Campo recuperado del EJS front ->' + selectPriceFinalDolar[i].innerText)
    //console.log('Este es lo mismo traido a numero ->' + selectPriceFinalDolar[i].innerText.replace('u$s ', ''))
    
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(function(response) {
      return response.json();
    })
    .then(function(resultado) {
      
      let roundedValueDolarOficial = Math.round(Number(resultado[0].casa.venta.replace(',', '.')) + 2.14062016)
      let pesoADolarOficial = Number( selectPriceFinalDolar[i].innerText.replace('u$s ', '')) * roundedValueDolarOficial
      //console.log ('El valor recuperado del EJS en dolares OFICIAL pasado a pesos queda en ->'+pesoADolarOficial)
      
      let roundedValueDolarBlue = Math.round(Number(resultado[1].casa.venta.replace(',', '.')) + 2.14062016)
      let pesoADolarBlue = Number( selectPriceFinalDolar[i].innerText.replace('u$s ', '')) * roundedValueDolarBlue
      //console.log ('El valor recuperado del EJS en dolares BLUE pasado a pesos queda en ->'+pesoADolarBlue)
      
      selectPriceFinalDolar[i].innerHTML = `$ ${pesoADolarOficial}` 
      
    });
  }

  
  
  
  console.log ('*************** CONSULTAS ***************')
  fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(function(response) {
    return response.json();
  })
  .then(function(resultado) {
    console.log ('*************** DOLARsi ***************')
    console.log (resultado)
    
    let roundedValueDolarOficial = Math.round(Number(resultado[0].casa.venta.replace(',', '.')) + 2.14062016)
    //let pesoADolarOficial = Number( selectPriceFinalDolar.innerText.replace('u$s ', '')) * roundedValueDolarOficial
    console.log ('*************** DOLAR OFICIAL ***************')
    console.log (resultado[0].casa.nombre + '-> '+ Number(resultado[0].casa.venta.replace(',', '.')))
    console.log ('Dolar Oficial adicionado y redondeado -> '+ typeof(roundedValueDolarOficial)+ " " + roundedValueDolarOficial)
    //console.log ('El valor recuperado del EJS en dolares pasado a pesos queda en ->'+pesoADolarOficial)
    
    let roundedValueDolarBlue = Math.round(Number(resultado[1].casa.venta.replace(',', '.')) + 2.14062016)
    //let pesoADolarBlue = Number( selectPriceFinalDolar.innerText.replace('u$s ', '')) * roundedValueDolarBlue
    console.log ('*************** DOLAR BLUE ***************')
    console.log (resultado[1].casa.nombre + '-> '+ Number(resultado[1].casa.venta.replace(',', '.')))
    console.log ('Dolar Blue adicionado y redondeado -> '+ typeof(roundedValueDolarBlue)+ " " + roundedValueDolarBlue)
    //console.log ('El valor recuperado del EJS en dolares pasado a pesos queda en ->'+pesoADolarBlue)
    
    let sumaPuntasDolarBlue = Number(resultado[1].casa.venta.replace(',', '.')) + Number(resultado[1].casa.compra.replace(',', '.'))
    let dolarBluePromedio = sumaPuntasDolarBlue/2
    console.log ('*************** DOLAR BLUE PROMEDIO DE PUNTAS***************')
    console.log ('Dolar Blue promediado -> ' + dolarBluePromedio)
    
  });
  
  }
  
})