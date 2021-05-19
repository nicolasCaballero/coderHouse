import ArticulosDB from './Articles.js'
import { mysql as config } from './config.js'

const articulos = [
  { nombre: 'Leche', codigo: 'AB-12', precio: 23.60, stock: 24 },
  { nombre: 'Harina', codigo: 'CD-34', precio: 12.80, stock: 45 },
  { nombre: 'DDL', codigo: 'EF-56', precio: 32.30, stock: 16 },
  { nombre: 'Fideos', codigo: 'FG-44', precio: 42.70, stock: 34 },
  { nombre: 'Crema', codigo: 'CR-77', precio: 67.90, stock: 24 }
]

const articulosDB = new ArticulosDB(config)

articulosDB.crearTabla()
  .then(() => {
    return articulosDB.insertar(articulos)
  })
  .then(() => {
    return articulosDB.listar()
  })
  .then((listado) => {
    console.table(listado)
    return articulosDB.borrarPorId(3)
  })
  .then(() => {
    return articulosDB.actualizarStockPorId(2, 0)
  })
  .then(() => {
    return articulosDB.listar()
  })
  .then((listado)=> {
    console.table(listado)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    articulosDB.cerrar()
  })