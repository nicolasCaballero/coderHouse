// use ecommerce
// 1) 2) 

// db.productos.insertMany([
// {nombre: "Mouse Logitech Gaming G703 Lightspeed Wireless", precio: 199, stock: 10},
// {nombre: "Mousepad de Tela Rigida G440", precio: 579, stock: 10},
// {nombre: "Auriculares Logitech G Pro X Gaming", precio: 1785, stock: 10},
// {nombre: "Kolink Void X Dual", precio: 2990, stock: 10},
// {nombre: "Teclado Logitech Mecanico Pro X", precio: 3121, stock: 10},
// {nombre: "Volante G29 Driving Force", precio: 4574, stock: 10},
// {nombre: "Monitor Gaming C24RG50", precio: 4003, stock: 10},
// {nombre: "Asrock X570 Taichi", precio: 3876, stock: 10},
// {nombre: "AMD RYZEN 7 3700X", precio: 1200, stock: 10},
// {nombre: "Memoria SS.2 ADATA XRTG 16gb", precio: 840, stock: 10}
// ])

// db.mensajes.insertMany([
// {nombre: "Mouse Logitech Gaming G703 Lightspeed Wireless", precio: 387, stock: 10},
// {nombre: "Mousepad de Tela Rigida G440", precio: 897, stock: 10},
// {nombre: "Auriculares Logitech G Pro X Gaming", precio: 3965, stock: 10},
// {nombre: "Kolink Void X Dual", precio: 1954, stock: 10},
// {nombre: "Teclado Logitech Mecanico Pro X", precio: 311, stock: 10},
// {nombre: "Volante G29 Driving Force", precio: 482, stock: 10},
// {nombre: "Monitor Gaming C24RG50", precio: 3214, stock: 10},
// {nombre: "Asrock X570 Taichi", precio: 1231, stock: 10},
// {nombre: "AMD RYZEN 7 3700X", precio: 3211, stock: 10},
// {nombre: "Memoria SS.2 ADATA XRTG 16gb", precio: 2653, stock: 10}
// ])

// 3) 
// db.productos.find()
// db.mensajes.find()

// 4) 
// db.productos.count()
// db.mensajes.count()

// 5) 
// a) Agregar un producto más en la colección de productos
// db.productos.insertOne({nombre: "Msi Nvidia Gtx 1650 D6 Ventus", precio: "4999", stock: 10})

// b) 
//     i) db.productos.find({"precio": {$lt: 1000}})
//     ii) db.productos.find({"precio": {$gt: 1000, $lt: 3000}})
//     iii) db.productos.find({"precio": {$gt: 3000}})
//     iiii) db.productos.find({},{"nombre": 1, "_id": 0}).sort({precio: 1}).skip(2).limit(1)

// c) db.productos.updateMany({ "precio":{ $gt: 1} }, {$set: {"stock": 100}})

// d) db.productos.updateMany({"precio":{ $gt: 4000} }, {$set: {"stock": 0}})

// e) db.productos.deleteMany({"precio": { $lt: 1000 }});

// 6) db.createUser({user: "pepe", pwd: "asd456", roles: [{role: "read", db: "ecommerce"}]})