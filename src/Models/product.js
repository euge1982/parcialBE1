//Archivo que define el modelo 'Producto'

const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database.js");  //Importa la instancia de Sequelize que ya se creo

//Construcción de las tablas de la base de datos, se define como va a ser el producto

const Product = sequelize.define('producto', {
    id:{
        type: DataTypes.INTEGER,   //Es un entero
        autoIncrement: true,  //Es autoincrementable
        primaryKey: true,  //Es clave primaria
        allowNull:false  //No se permiten valores nulos
    },
    nombre:{
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres de largo
        allowNull: false   //No se permiten valores nulos
    },
    categoria:{
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres
        allowNull: true,   //Se permite que el valor sea nulo, o sea que un producto puede no tener categoria
        defaultValue: null,   //El valor por default es nulo
    },
    precio:{
        type: DataTypes.DECIMAL(10,2),   //Es un numero con 2 decimales
        allowNull: false,   //No se permiten valores nulos
    },
    cantidad:{
        type: DataTypes.INTEGER,   //Es un valor entero
        allowNull: false,   //No se premiten valores nulos
    },
}, {
    tableName: 'productos',  //Es el nombre de la tabla en la base de datos
    timestamps: false,  //Desactiva los timestamp (createdAt, updateAt)
    }
);

module.exports = Product; //Exporta el modelo 'Product' para que pueda ser utilizado en otros módulos