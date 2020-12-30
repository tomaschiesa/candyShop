
# Versiones:

-> 
 - 

-> 3.4.1
 - Creación de campos en DB para selección de conversión.
 - Se modifica el index y las vistas de producto para la conversion de moneda automatica.
 - Se corrigen estilos y tamaños de tipografias en las vistas de articulos.
 - Se corrige en la vista de oferta y destacados una falla que no mostraba correctamente el titulo de la sección.
 - Se agruparon las vistas y corrigieron tanto los imput como las rutas
 - Se arreglaron detalles que mostraban mal los options en los form cuando para indicar el valor selected correcto.
 - Se puede desde el CRUD de producto indicar monera de publicacion, moneda a mostrar.
 - Se agrega la muestra de talles en la vista detalle (XS - S - M - L - XL - XXL)
 - Aun pendiente de agregar color y meterlo en la base de datos (codigo oculto, se continuara su desarrollo).
 - Se actualizaron las migraciones y seeders con los cambios nuevos en la DB.
 - Los precios de articulos son irrisorios por las pruebas de convertibilidad.
 - Se actualizo el numero de versión en package.json y en package-lock.json.

-> 3.4.0
 - Creación de script API Dolar. Docu comentada en el modulo.
 - Se agregó el uso del script en el EJS global (_endBodyScripts.ejs).
 - Se agregó el id priceFinalDolarAPesos y se corrigio la posición del signo $ antes del precio en las vistas para que funcione el srcipt.
 - Se eliminaron los signos $ insertados por CSS y se pusieron por HTML para el correcto funcionamiento.
 - Creación de carpeta public/js/api.
 - Corrección de nombres de scripts JS de apis y cambio de requerimientos en los ejs.
 - Se eliminaron varias vistas de prueba asi como sus rutas en routes/main.js.
 - Se eliminó la vista suspend con su método en el controller y la ruta ya que no se utilizaba.
 - Se corrige error en modificación de edición check oferta de articulo.
 - Se implementa orden alfabético en categorías del navBar2.
 - Se agrega el contador de visitas en la DB para los artículos.
 - Se agrega el middleware que toma el contador y lo modifica +1 por cada visita.
 - Se implementa en el mainController los 12 artículos mas visitados.
 - Se modifica en vista home Productos mas vendidos x mas visitados.
 - Correcciones en el footer con detalle de versión y copyright.
 - Se agrega en productEditForm el campo para modificar el contador de visitas.
 - Se agrega el valor en productController.updateProduct.
 - Se agrega en las rutas el require del el middleware y el uso del mismo para el contador de visitas.
 - Se limpiaron imágenes y seeders fakers.
 - Se actualizo el numero de versión en package.json y en package-lock.json.
 - Se actualizaron las migraciones y seeders con los cambios nuevos en la DB.

# candyShop
// Desarrollado inicialmente como proyecto integrador para el curso de fullStack por © >_cuarentenialCoders </primeTeam>
// 07/04 al 17/08 del 2020 - DH