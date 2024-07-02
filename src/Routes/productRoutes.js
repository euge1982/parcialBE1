/*Archivo que define las rutas relacionadas con el modelo 'Producto'
Y las asocia con los metodos del controlador que corresponde*/

const express = require('express');   //Importa Express
const router = express.Router();   //Crea un enrutador
const controlador = require ('../Controllers/productController.js');  //Importa el controlador de productos

/*Las rutas especiales se definen antes que las rutas con parametros, para que Express no tome la ruta 
especial como un parametro dinamico de una ruta con parametro*/

//Rutas para las operaciones especiales
router.get('/ordenados', controlador.getProductosOrdenados);
router.get('/filtrados', controlador.getProductosFiltrados); 

//Rutas para el CRUD
router.post('/', controlador.createProduct);   //Crea un nuevo producto
router.get('/', controlador.getAllProducts);   //Obtiene todos los productos
router.get('/:id', controlador.getProductById);   //Obtiene el producto con un id especifico
router.put('/:id', controlador.updateProductById);   //Actualiza un producto con un id dado
router.delete('/:id', controlador.deleteProductById);   //Elimina un producto con un id dado

module.exports = router;   //Exporta el enrutador para que sea utilizado en otros modulos
